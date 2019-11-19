const Controller=require('egg').Controller;

class ProductController extends Controller{
    async index(){
        const {ctx}=this;
        ctx.body="product";//可以为str，也可以是object
    }
}
module.exports=ProductController
