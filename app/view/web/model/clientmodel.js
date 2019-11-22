import axios from 'axios'

const request = axios.create({
  baseURL: '/'
})
export default {
    getAllTodos () {
        return request.get('http://127.0.0.1:7002/api/todos')
      },
  login (username, password) {
    return request.post('/user/login', { username, password })
  },
}
