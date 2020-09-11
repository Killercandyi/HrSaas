const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 导出 token
  token: state => state.user.token,
  // 导出用户名
  name: state => state.user.userInfo.username
}
export default getters
