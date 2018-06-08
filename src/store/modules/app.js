// initial state
const state = {
  pageLoading: false
}

// getters
const getters = {
  pageLoading: state => state.pageLoading
}

// actions
const actions = {
}

// mutations
const mutations = {
  setLoading (state) {
    state.pageLoading = true
  },
  setLoaded (state) {
    state.pageLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
