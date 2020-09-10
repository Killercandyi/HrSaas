const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 导出 token
  token: state => state.user.token
}
export default getters
