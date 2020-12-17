import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import echarts from 'echarts'
import echartsGL from 'echarts-gl'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
// import vueSeamlessScroll from 'vue-seamless-scroll'

import './router/index'
import './assets/icons' // icon
import '@/assets/css/theme/index.scss' //element
Vue.prototype.$echarts = echarts
Vue.prototype.$echartsGL = echartsGL
// import * as maps from '@/assets/map/index'

// console.log(maps)
// Vue.use(vueSeamlessScroll)

Vue.use(BaiduMap, {
  ak: 'yM7IUbMIzcPoqRXUsi3h6m9kreZR794W'
})

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')