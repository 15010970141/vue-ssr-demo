import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // base: '/base/' // 配置基路径
    linkActiveClass: 'active-link', // 只要有就添加
    linkExactActiveClass: 'exact-active-link', // 指定class名称  完全匹配
    scrollBehavior (to, from, savePosition) {
      if (savePosition) {
        return savePosition // 记录页面跳转时的滚动条的位置
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true // 在浏览器不支持history路由的情况下，自动转换为hash
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
