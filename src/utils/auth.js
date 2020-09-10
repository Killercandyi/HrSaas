import Cookies from 'js-cookie'

const TokenKey = 'hr-saas-project-token' // 存储token的name

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
