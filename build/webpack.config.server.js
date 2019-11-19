const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueServerPlugin = require('vue-server-renderer/server-plugin') // 有了这个插件, 打包输出的会是json文件
const baseConfig = require('./webpack.config.base')

// const isDev = process.env.NODE_ENV === 'development'

const config = {
   // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node', // 定义打包出来的js的执行环境
  entry: path.join(__dirname, '../app/view/web/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2', // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies), // 外置化应用程序依赖模块。可以使服务器构建速度更快，
  devtool: 'source-map', // ssr用source-map 对 bundle renderer 提供 source map 支持
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
         'vue-style-loader',
         {
          loader: 'css-loader'
         }
        ],
       }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"' // ssr官方规定
    }),
    new VueServerPlugin()  // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json
  ]
}

module.exports = merge(baseConfig, config)
