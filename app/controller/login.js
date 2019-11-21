const Controller=require('egg').Controller;

class LoginController extends Controller{
    async index() {
        let renderer = this.app.renderer;
      console.log('renderer'+renderer);
        let context = {
            url: this.ctx.request.url
        };
      console.log(this.ctx.request.url);
      const appString = await renderer(context)
    this.ctx.body=await this.ctx.renderView('web/layout/index.tpl', {
          appString:appString,
          style: context.renderStyles(),
          script: context.renderScripts()
        });
  
    }
}
module.exports =LoginController;