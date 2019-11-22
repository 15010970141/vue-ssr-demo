const Controller=require('egg').Controller;

class HomeController extends Controller{
    async index() {
        let renderer = this.app.renderer;
        if(!renderer){
          ctx.body="请稍等一会"
        }
        let context = {
            url: this.ctx.request.url
        };
     this.ctx.body=await renderer(context)
    }
}
module.exports =HomeController;