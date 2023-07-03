import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModalOpened: false,
    modalContent: null
  },
  getters: {
  },
  mutations: {
    toggleModal(state, payload) {
      if (!payload) {
        state.modalContent = null;
      } else {
        state.modalContent = payload;
      }
      state.isModalOpened = !state.isModalOpened;
    }
  },
  actions: {

  },
  modules: {
  }
})
