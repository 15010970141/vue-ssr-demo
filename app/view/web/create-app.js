import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import App from './app.vue'
import createRouter from './config/router'
import createStore from './store/store'
import './assets/styles/global.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

export default () => {
  const router = createRouter()
  const store= createStore()
  //异步加载模块 store 提供动态创建模块 
  // store.registerModule('c',{
  //   state:{
  //     text:3
  //   }
  // })
  // store.unregisterModule('c') 解绑一个module
  //store.watch((state)=>state.count+1,(newcount)=>{
    //console.log('new count watch','newcount')
  //})
  //监听mutation的被调用情况
  // store.subscribe((mutation,state)=>{

  // })
  //监听action的被调用情况
  // store.subscribeAction((action,state)=>{})
  const app = new Vue({
    router,
     store,
    render: h => h(App)
  })

  return { app, router,}
}
