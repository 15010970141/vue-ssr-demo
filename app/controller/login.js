const Controller=require('egg').Controller;

class LoginController extends Controller{
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
    async login(){
      const user =this.ctx.request.body
      if (user.username === 'wmm' && user.password === '1111') {
        // ctx.session.user = {
        //   username: 'wmm'
        // }
        this.ctx.body = {
          success: true,
          data: {
            username: 'wmm'
          }
        }
      } else {
        console.log('err')
        ctx.status = 400
        ctx.body = {
          success: false,
          message: 'username or password error'
        }
      }
    }
}
module.exports =LoginController;