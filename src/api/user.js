// 引入的是 utils下面的request.js 文件 本质上市一个axios
import request from '@/utils/request'

// 把所有的请求封装成一个个函数
// 登录接口
export function login(data) {
  // console.log(data)
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {

}

export function logout() {

}
