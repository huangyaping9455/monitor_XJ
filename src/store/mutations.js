import * as types from './mutation-types'

const mutations = {
  // 设置用户信息
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  },
}

export default mutations
