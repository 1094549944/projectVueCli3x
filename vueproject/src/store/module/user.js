const state = {
  userName: 'zhangsan'
}
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {}
const actions = {}
export default {
  namespaced: true, //使用命名空间
  state,
  getters,
  mutations,
  actions
}
