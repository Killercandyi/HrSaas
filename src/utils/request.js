// 在这个文件中需要导出一个axios的实例，而且这个实例需要有请求拦截器和响应拦截器
import axios from 'axios'
const service = axios.create() // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use()
// 导出axios实例
export default service
