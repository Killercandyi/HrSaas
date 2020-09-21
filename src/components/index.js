// 该文件负责所有的公共的组件的全局注册
import PageTools from './PageTools'
import UploadExcel from './UploadExcel' // 导入Excel组件
import imageUpload from './imageUpload' // 导入Excel组件

// 导出 注册
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('imageUpload', imageUpload)
  }
}
