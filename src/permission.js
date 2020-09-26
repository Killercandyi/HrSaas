// 引入路由实例
import router from '@/router'
// 引入Vuex实例
import store from '@/store'
// 引入进度条模块
import Nprogress from 'nprogress'
// 进度条样式
import 'nprogress/nprogress.css'
// 白名单 , 不需要强制token存在的页面
const whiteList = ['/login', '/404']

// 路由前置守卫
router.beforeEach(async(to, from, next) => {
  Nprogress.start() // 一进来先开启进度条
  // 再判断有没token值
  if (store.getters.token) { // 有 token值 next
    // 如果已经在登录页面了 跳往主页
    if (to.path === '/login') {
      next('/')
    } else {
      // 调用获取用户信息action (拿到token的时候同时也拿到了信息)
      // console.log(!store.getters.userId)
      // console.log(await store.dispatch('user/getUserInfo'))
      if (!store.getters.userId) {
        const { roles } = await store.dispatch('user/getUserInfo')

        const routes = await store.dispatch('permission/filterRoutes', roles.menus)

        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])

        next(to.path)
      } else {
        // 其他直接放行
        next()
      }
    }
    Nprogress.done() // if 结束之后关闭 (强制关闭)
  } else { // 没有 token值 应该调回login
    if (whiteList.indexOf(to.path) > -1) {
      // 如果在白名单中没有token值 则直接放过
      next()
    } else {
      // 如果在白名单之外则需要跳转到登录页 登录
      next('/login')
    }
    Nprogress.done() // if 结束之后关闭 (强制关闭)
  }
})
// 后指守卫
router.afterEach(() => {
  // 前置守卫已经加载完毕了 关闭进度条
  Nprogress.done()
})
