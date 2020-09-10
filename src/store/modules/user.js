// 引入设置token本地缓存的文件
import { getToken, setToken, removeToken } from '@/utils/auth'
// 引入封装的登录接口
import { login } from '@/api/user'
// 共享状态
const state = {
  token: getToken() // token的共享状态
}
// 修改共享状态(同步代码)
const mutations = {
  // 设置用户的 token 值
  // 易错点 这里有两个 settoken 函数 , 但第一个是声明一个修改state token属性的函数名而已 可以的其他名字,里面的settoken调用是引入的本地缓存文件的调用,本质上是不一样
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 删除 token
  removeToken(state) {
    state.token = null // 现将token的值设置为空
    removeToken() // 删除
  }
}
// 异步代码
const actions = {
  // 登录actions
  // 这里的data 参数应该是调用actions的时候传过来的
  async login(context, data) {
    const res = await login(data)
    // 因为已经做了响应的拦截器处理 实际上我们不在用判断了
    // if (res.data.success) {
    // 如果接口响应成功应该吧数据调教mutations
    context.commit('setToken', res)
    // }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
