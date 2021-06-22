import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

//解决点击同一个路由报错
const [originalPush, routerReplace] = [Router.prototype.push, Router.prototype.replace];
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error);
};

export const constantRouterMap = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      requiresAuth: false
    },
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    meta: {
      title: '首页',
      requiresAuth: true
    },
    component: () => import('@/views/Home/index')
  },
  {
    path: '/dataAnalysis',
    meta: {
      title: '数据分析',
      requiresAuth: true
    },
    component: () => import('@/views/DataAnalysis/index')
  },
  {
    path: '/enterprise',
    meta: {
      title: '报警排名统计',
      requiresAuth: true
    },
    component: () => import('@/views/Statistics/enterprise')
  },
  {
    path: '/treatmentRate',
    meta: {
      title: '处理率统计',
      requiresAuth: true
    },
    component: () => import('@/views/TreatmentRate/index')
  },
  {
    path: '/treatmentRateinfo',
    meta: {
      title: '处理率统计详情',
      requiresAuth: true
    },
    component: () => import('@/views/TreatmentRate/treatmentRateinfo')
  },
  {
    path: '/vehicleinfo',
    meta: {
      title: '报警车辆详情',
      requiresAuth: true
    },
    component: () => import('@/views/TreatmentRate/vehicleinfo')
  },
  {
    path: '/addNotice',
    name: 'addNotice',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Notice/addNotice')
  },
  {
    path: '/addNotice',
    name: 'addNotice',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Notice/addNotice')
  },
  {
    path: '/addSafetyInspection',
    name: 'addSafetyInspection',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/SafetyInspection/addSafetyInspection')
  },
  {
    path: '/addDocumentFile',
    name: 'addDocumentFile',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/DocumentFile/addDocumentFile')
  },
  {
    path: '/addIssueRectification',
    name: 'addIssueRectification',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/IssueRectification/addIssueRectification')
  },
  // 企业报警排名
  {
    path: '/QYvehicle',
    name: 'QYvehicle',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/QYvehicle/index')
  },
  // 日运行情况统计
  {
    path: '/DayStatistics',
    name: 'DayStatistics',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/DayStatistics/index')
  },
  // 企业日运行情况统计
  {
    path: '/QYDayStatistics',
    name: 'QYDayStatistics',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/QYDayStatistics/index')
  },
  // 地区报警排名
  {
    path: '/ZFDQ',
    name: 'ZFDQ',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ZFDQ/index')
  },
  // 车辆报警排名
  {
    path: '/VehicleRank',
    name: 'VehicleRank',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/VehicleRank/index')
  },
  {
    path: '',
    meta: {
      title: '政企互通'
    },
    component: Layout,
    redirect: '/notice',
    children: [{
        path: 'notice',
        name: 'notice',
        meta: {
          title: '通知公告',
          requiresAuth: true
        },
        component: () => import('@/views/Notice/index')
      },
      {
        path: '/SafetyInspection',
        name: 'SafetyInspection',
        meta: {
          title: '安全查岗',
          requiresAuth: true
        },
        component: () => import('@/views/SafetyInspection/index')
      },
      {
        path: '/documentFile',
        name: 'documentFile',
        meta: {
          title: '文件下发',
          requiresAuth: true
        },
        component: () => import('@/views/DocumentFile/index')
      },

      {
        path: '/distributionOptions',
        name: 'distributionOptions',
        meta: {
          title: '下发单位选择',
          requiresAuth: true
        },
        component: () => import('@/views/DocumentFile/distributionOptions')
      },
      {
        path: '/issueRectification',
        name: 'issueRectification',
        meta: {
          title: '下发整改',
          requiresAuth: true
        },
        component: () => import('@/views/IssueRectification/index')
      },
      {
        path: '/vehicle',
        name: 'vehicle',
        meta: {
          title: '车辆统计',
          requiresAuth: true
        },
        component: () => import('@/views/Statistics/vehicle')
      },
      {
        path: '/weekReport',
        name: 'weekReport',
        meta: {
          title: '周报',
          requiresAuth: true
        },
        component: () => import('@/views/weekReport/index'),
      },
      {
        path: '/monthReport',
        name: 'monthReport',
        meta: {
          title: '月报',
          requiresAuth: true
        },
        component: () => import('@/views/monthReport/index'),
      }
    ]
  },
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})