import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barChartData :[56, 0, 0, 0, 2, 0, 84],
    lineChartData:[65, 59, 80, 81, 56, 55, 40]
  },

  mutations: {
    changeValues(state) {
      state.barChartData = Array.from({length: 7}, () => Math.floor(Math.random() * 100));
      state.lineChartData = Array.from({length: 7}, () => Math.floor(Math.random() * 100))


    }
  },
  actions: {
    changeValues({ commit }) {
        commit("changeValues");
    }
  }
})
