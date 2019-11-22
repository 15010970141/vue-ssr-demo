import model from '../../model/clientmodel'
import bus from '../../util/bus'
import notify from '../../components/notification/function'
export default {
//   updateCountAsync (store, data) {
//     // console.log('asdasd')
//     setTimeout(() => {
//       store.commit('updateCount', {
//         num: data.num
//       })
//     }, data.time)
//   },
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          console.log(data)
          notify({
            content: '登录成功'
          })
          resolve()
      
        }).catch(err => {
          reject(err)
         
        })
    })
  },
  fetchTodos ({ commit }) {
    //   console.log(model.getAllTodos())
    return model.getAllTodos()
      .then(data => {
        commit('fillTodos', data.data.data.list)
      })
      .catch(err => {
          console.log(err)
      })
  },
}
