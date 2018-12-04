import Vue from 'vue'
import Vuex from 'vuex'

import { modules } from './modules/index'
import { getters } from './getters/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  getters
})

export default store
