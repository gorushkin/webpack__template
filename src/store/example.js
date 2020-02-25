export default {
  state: {
    message: 'test message from store'
  },
  mutations: {},
  actions: {},
  getters: {
    getMessage (state) {
      return state.message
    }
  }
}
