import Vue from 'vue'

var $articles = Vue.resource('http://localhost:3000/api/v1/articles{/id}')

var ArticleProvider = {};
ArticleProvider.getAll = function () {
  return $articles.query()
}
ArticleProvider.getById = function (id) {
  return $articles.get({id: id})
}


export default ArticleProvider
