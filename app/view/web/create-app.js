import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import App from './app.vue'
import createRouter from './config/router'

import './assets/styles/global.css'

Vue.use(VueRouter)
// Vue.use(Vuex)
Vue.use(Meta)

export default () => {
  const router = createRouter()
  // const store = createStore()

  const app = new Vue({
    router,
    // store,
    render: h => h(App)
  })

  return { app, router,}
}
