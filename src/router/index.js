import Vue from 'vue'
import router from './router'

import vueWechatTitle from 'vue-wechat-title'
Vue.use(vueWechatTitle)

router.beforeEach((to, from, next) => {
  // 标题设置
  if (to.meta.title) {
    // document.title = to.meta.title
    document.title = '道路运输安全管理第三方监测平台'
  }
  // 登录拦截
  let userinfo = sessionStorage.getItem('userinfo');
  if(to.meta.requiresAuth){
    if (!userinfo) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }else{
    next()
  }
})