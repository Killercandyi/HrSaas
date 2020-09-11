// 引入设置token本地缓存的文件
import { getToken, setToken, removeToken } from '@/utils/auth'
// 引入封装的登录接口
import { login, getUserInfo, getUserDetailById } from '@/api/user'

// 共享状态
const state = {
  token: getToken(), // token的共享状态
  userInfo: {} // 用户数据的共享
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
  },
  // 修改userInfo
  setUserInfo(state, userInfo) {
    state.userInfo = { ...userInfo }
  },
  // 删除userInfo
  removeUserInfo(state) {
    state.userInfo = {}
  }
}

// 异步代码
const actions = {
  // 登录actions
  // 这里的data 参数应该是调用actions的时候传过来的
  async login(context, data) {
    // debugger
    const res = await login(data)
    // console.log(res)
    // return false
    // 因为已经做了响应的拦截器处理 实际上我们不在用判断了
    // if (res.data.success) {
    // 如果接口响应成功应该吧数据调教mutations
    context.commit('setToken', res)
    // }
  },

  // 获取用户信息action
  async getUserInfo(context) {
    const res = await getUserInfo()
    // 为了获取用户头像
    const baseInfo = await getUserDetailById(res.userId)
    // 现在已经获取到了用户的基本信息
    const baseRes = { ...res, ...baseInfo }
    context.commit('setUserInfo', baseRes)
    // 返回数据,为后面埋下伏笔 一定会用到
    return baseRes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
