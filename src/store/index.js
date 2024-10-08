import Vue from 'vue'
import Vuex from 'vuex'

import state from '@/store/state'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'

Vue.use(Vuex)

// const debug = false
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store