const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 导出 token
  token: state => state.user.token,
  // 导出用户名
  name: state => state.user.userInfo.username,
  // 导出用户信息id
  userId: state => state.user.userInfo.userId,
  // 建立用户头像的映射
  staffPhoto: state => state.user.userInfo.staffPhoto
}
export default getters
