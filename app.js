const axios = require('axios')
const path = require('path')
const fs = require('fs')
const isDev = process.env.NODE_ENV === 'development'
// 在内存里操作文件, 提高效率, 只用在开发环境
const MemoryFs = require('memory-fs')
// 直接在nodejs里打包代码
const webpack = require('webpack')
const { createBundleRenderer } = require('vue-server-renderer');
// 引入server-render.js
// const serverRender = require('./serve-render')

// 引入webpack配置文件
const serverConfig = require('./build/webpack.config.server')
// 在node环境下执行打包命令, 这个serverCompiler可以调用run()和watch()方法
const serverCompiler = webpack(serverConfig)
// 实例化一个mfs
const mfs = new MemoryFs()
// 指定webpack打包的输出目录在内存里
serverCompiler.outputFileSystem = mfs
const template = fs.readFileSync(
  path.join(__dirname, './app/view/web/layout/index.html'),
  'utf-8'
)
async function handleDevSSR(bundle) {
    if(!bundle){
        console.log('请稍等一会');
        return
    }
      const clientManifestRes = await axios.get(
        'http://0.0.0.0:9001/public/vue-ssr-client-manifest.json'
      )
    
      const clientManifest = clientManifestRes.data
      // console.log(clientManifest)
    let renderer = createBundleRenderer(bundle, {
      template,
            clientManifest
        });
   return  await renderer.renderToString;

}
async function handleSSR() {
  const clientManifest = require('./public/vue-ssr-client-manifest.json')
const renderer =createBundleRenderer(
  path.join(__dirname, './server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    clientManifest
  }
) 
   return  await renderer.renderToString;

}
  class AppBootHook {
    constructor(app) {
        this.app = app;
    }
   
    // 配置文件加载完毕事件
    async willReady(){
    if(isDev){
      let bundle // 用来记录webpack每次打包出来的文件
      serverCompiler.watch({}, (err, stats) => {
        if (err) throw err
        stats = stats.toJson()
        stats.errors.forEach(err => console.log(err))
        stats.warnings.forEach(warn => console.warn(err))
      
        const bundlePath = path.join(
          serverConfig.output.path,
          'vue-ssr-server-bundle.json' // vue-server-renderer默认生成的json名
        )
        bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
        console.log('new bundle completed')
        handleDevSSR(bundle).then(renderer=>{
              this.app.renderer = renderer;
            })
          })
      
    }else{
      this.app.renderer=await handleSSR()
    }
  
}
  }

module.exports = AppBootHook;
//   await serverRender(ctx, renderer, template)

// router.get('*', handleSSR)