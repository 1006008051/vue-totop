import vueToTop from './vuetop.vue' // 导入组件
vueToTop.install = function (Vue) {
  Vue.component('vueToTop',vueToTop)
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueToTop);
  }
}
export default vueToTop
