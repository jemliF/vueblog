import Vuex from 'vuex'
import ArticleProvider from '../providers/ArticleProvider'
import AuthorProvider from '../providers/AuthorProvider'

const state = {
  profile: {},
  articles: [],
  authors: []
}
const mutations = {
  GET_ARTICLES: (state) => {
    ArticleProvider.getAll().then(function (response) {
      state.articles = response.body
    }, function (err) {
      console.error(err)
    })
  },
  UPDATE_PROFILE: (state, profile) => {
    state.profile = profile
  }
}
const actions = {
  updateProfile(context, user){
    context.commit('UPDATE_PROFILE', user)
  },
  getArticles(context){
    context.commit('GET_ARTICLES')
  }
}
const getters = {
  profile: state => state.profile,
  articles: state => state.articles,
  authors: state => state.authors
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
