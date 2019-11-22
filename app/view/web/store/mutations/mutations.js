export default{
    //多个参数只能通过object的形式传入
    //官方推荐state的修改都在mutaion内修改
    updateCount(state,{num,num2}){
        state.count=num
    },
    fillTodos(state,todos){
        state.todos=todos
    }
}