// 在这个文件中需要导出一个axios的实例，而且这个实例需要有请求拦截器和响应拦截器
import axios from 'axios'
// 单独引入element的提示框
import { Message } from 'element-ui'
const service = axios.create({
  // 设置baseURL
  baseURL: process.env.VUE_APP_BASE_API,
  // 设置请求超过时间
  timeout: 5000
}) // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use()
// 响应拦截器 有两个参数 都是函数第一个是成功的时候执行,后一个是失败的执行
service.interceptors.response.use(response => {
  // 接收响应回来的数据
  const { success, data, message } = response.data
  if (success) { // 如果响应回来的success为true 就可以将datareturn
    return data
  } else {
    // 错误就提示错误的信息
    Message.error(message)
    // 最后在 reject
    return Promise.reject(new Error(message))
  }
}, error => {
  // 弹出提示失败
  Message.error(error.message)
  // 返回reject
  return Promise.reject(error)
})
// 导出axios实例
export default service
