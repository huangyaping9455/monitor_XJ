import * as types from '../mutation-types'

const state = {
  depts: [], //送达企业列表
  fasongdanwei:'', //发送企业
  xuanzhongchengshi:{} //选中城市
}
const getters = {
  depts:state => state.depts,
  fasongdanwei:state => state.fasongdanwei,
  xuanzhongchengshi:state => state.xuanzhongchengshi,
}
const actions = {}

const mutations = {
  // 设置送达企业列表
  [types.SET_DEPTS] (state, depts) {
    state.depts = depts
  },
  // 设置发送企业
  [types.SET_FASONGDANWEI] (state, fasongdanwei) {
    state.fasongdanwei = fasongdanwei
  },
  // 设置选中城市
  [types.SET_XUANZHONGCHENGSHI] (state, xuanzhongchengshi) {
    state.xuanzhongchengshi = xuanzhongchengshi
  }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}