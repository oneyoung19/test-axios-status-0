import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 15,
    copyCount: 100
  },
  mutations: {
    SET_COUNT (state) {
      state.count++
    },
    SET_COPY_COUNT (state) {
      state.copyCount++
    }
  },
  actions: {
  },
  modules: {
  }
})
