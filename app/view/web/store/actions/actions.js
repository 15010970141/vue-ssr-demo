export default{
    //mutation里面只能写同步的代码不能执行一步操作
    updateCountAsync(store,data){
        console.log(data);
        setTimeout(() => {
            store.commit('updateCount',{
                num:data.num
            })
        }, data.time);
    }
}