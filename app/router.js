module.exports=app=>{
 const {router, controller}=app;
 
 router.get('/',controller.home.index)
 router.get('/app',controller.home.index)
 router.get('/login',controller.login.index)
}