import Todo from '../pages/todo/todo.vue'
import Login from '../pages/login/login.vue'
export default
[{
  path: '/',
  redirect: '/app'

},
{
  path: '/app',
  component: Todo,
  name: 'app', // 命名路由
  meta: {
    title: 'this is app',
    description: 'asdasd'
  }
  // children: [
  //   {
  //     path: 'test',
  //     component: Login
  //   }
  // ]
},
{
  path: '/login',
  component: Login

}
// {
//   path: '/login/:id',
//   component: Login,
//   // props: true
//   // props: {
//   //   id: '456'
//   // }
//   props: (route) => ({ id: route.query.b }) // 组件与router解藕
// }
]
