import Vue from 'vue'
import App from './App.vue'
import vueToTop from './lib/index.js'
Vue.use(vueToTop)
new Vue({
  el: '#app',
  render: h => h(App)
})
