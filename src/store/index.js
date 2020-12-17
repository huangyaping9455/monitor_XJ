import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import government from './modules/government'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// store
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  modules: {
    government
  },
  plugins: debug ? [createLogger()] : []
})
export default store
