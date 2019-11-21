import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev=process.env.NODE_ENV==='development'
export default ()=>{
  
    const store= new Vuex.Store({
        strict:isDev,//只能在mutation内修改state的值，会提示警告
        state:defaultState,
        mutations,
        getters,
        actions,
        modules:{
            a:{
                namespaced:true,
                state:{
                    text:1
                },
                mutations:{
                    updateText(state,text){
                        console.log('a.state',state)
                        state.text=text
                    }
                },
                getters:{
                    textPlus(state,getters,rootState){
                        return state.text+rootState.count
                    }
                },
                actions:{
                    //ctx当前模块的store
                    add({state,commit,rootState}){
                     commit('updateText',rootState.count)
                     commit('updateCount',{num:5678},{root:true})
                    }
                }
            },
            b:{
                // namespaced:true,声明了命名空间以后，需要在后面加上{root:true}
                state:{
                    text:2
                },
                actions:{
                    testAction({commit}){
                        commit('a/updateText','test1 test2')
                    }
                }
            }
        },
        plugin:[
            // (store)=>{
            //     //在初始化的时候被调用
            // }
        ]
    })
    
  
    // if (module.hot) {
    //     module.hot.accept([
    //       './state/state',
    //       './mutations/mutations',
    //       './actions/actions',
    //       './getters/getters'
    //     ], () => {
    //       const newState = require('./state/state').default
    //       const newMutations = require('./mutations/mutations').default
    //       const newActions = require('./actions/actions').default
    //       const newGetters = require('./getters/getters').default
    
    //       store.hotUpdate({
    //         state: newState,
    //         mutations: newMutations,
    //         getters: newGetters,
    //         actions: newActions
    //       })
    //     })
    //   }
    return store
}