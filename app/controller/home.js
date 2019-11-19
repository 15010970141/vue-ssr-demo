const Controller=require('egg').Controller;

class HomeController extends Controller{
    async index() {
        let renderer = this.app.renderer;
      console.log('renderer'+renderer);
        let context = {
            url: this.ctx.request.url
        };
      console.log(this.ctx.request.url);
      const appString = await renderer(context)
      
        // renderer(context, (err, html) => {
        //     console.log(err);
        //     // if (err) {
        //     //     if (err.code === 404) {
        //     //         this.ctx.body = "404";
        //     //     } else {
        //     //         this.ctx.body = process.env.NODE_ENV;
        //     //     }
        //     // } else {
        //         this.ctx.body = html;
        //     // }
        // });
     
    this.ctx.body=await this.ctx.renderView('web/layout/index.tpl', {
          appString:appString,
          style: context.renderStyles(),
          script: context.renderScripts()
        });
  
    }
}
module.exports =HomeController;