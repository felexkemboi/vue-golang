import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barData :Array.from({length: 7}, () => Math.floor(Math.random() * 100)),
    lineData:Array.from({length: 7}, () => Math.floor(Math.random() * 100)),
  },
  mutations: {
    changeValues(state) {
      state.barData = Array.from({length: 7}, () => Math.floor(Math.random() * 100));
      state.lineData = Array.from({length: 7}, () => Math.floor(Math.random() * 100))
    }
  },
  actions: {
    changeValues({ commit }) {
        commit("changeValues");
    }
  }
})
