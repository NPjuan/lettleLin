import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCityIndex: 0,
    cityList: [
      '广州',
      '东莞'
    ]
  },
  getters: {
    currentCity(state) {
      const { currentCityIndex = 0, cityList = ['东莞'] } = state
      return cityList[currentCityIndex]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
