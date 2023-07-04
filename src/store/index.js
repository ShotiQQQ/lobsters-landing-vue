import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModalOpened: false,
    modalContent: null,
    queryParams: {},
    platformsIcons: [
      {
        id: 1,
        name: 'YouTube'
      },
      {
        id: 2,
        name: 'Telegram'
      },
      {
        id: 3,
        name: 'Сайты / Блоги'
      },
      {
        id: 4,
        name: 'Tik Tok'
      },
      {
        id: 5,
        name: 'Яндекс Дзен'
      },
      {
        id: 6,
        name: 'Мобильные приложения'
      },
      {
        id: 7,
        name: 'Instagram'
      },
      {
        id: 8,
        name: 'Вконтакте'
      },
      {
        id: 9,
        name: 'Рассмотрим другие площадки'
      }
    ]
  },
  getters: {
  },
  mutations: {
    toggleModal(state, payload) {
      if (!payload) {
        state.modalContent = null;
        state.isModalOpened = false;
      } else {
        state.modalContent = payload;
        state.isModalOpened = true;
      }
    },
    getQueryParams(state, payload) {
      if (payload) {
        state.queryParams = payload;
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
