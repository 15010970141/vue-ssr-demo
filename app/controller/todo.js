const Controller=require('egg').Controller;

class TodoController extends Controller{
    async index(){
        const {ctx}=this;

        ctx.logger.error('aaaaa.aaa');

        // const username=ctx.request.body
        // if (username === 'wmm' ) {
          this.ctx.body = {
            success: true,
            data: {
                list: [
                    {id:1,content:'aaa',completed:false},
                    {id:2,content:'bbb',completed:false},
                    {id:3,content:'ccc',completed:false},
                    {id:4,content:'ddd',completed:false},
               ]
            }
          }
        // } else {
        //   console.log('err')
        //   ctx.status = 400
        //   ctx.body = {
        //     success: false,
        //     message: '请先登录'
        //   }
        // }
      }
}
module.exports=TodoController
