// 该文件负责所有的公共的组件的全局注册
import PageTools from './PageTools'

// 导出
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)
  }
}
