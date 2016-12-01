import Vuex from 'vuex'
import ArticleProvider from '../providers/ArticleProvider'
import AuthorProvider from '../providers/AuthorProvider'

const state = {
  articles: []
}
const mutations = {
  GET_ARTICLES: (state) => {
    ArticleProvider.getAll().then(function (response) {
      state.articles = response.body
    }, function (err) {
      console.error(err)
    })
  }
}
const actions = {
  getArticles(context){
    context.commit('GET_ARTICLES')
  }
}
const getters = {
  articles: state => state.articles,
  myArticles: (state, author) => state.articles.filter(article => article.author === author)
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
