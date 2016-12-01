import Vue from 'vue'

const API_URL = 'http://localhost:3000/api/v1/'
const $authors = Vue.resource('http://localhost:3000/api/v1/authors{/id}')


var AuthorProvider = {};
AuthorProvider.getAll = function () {
  return $authors.query()
}
AuthorProvider.getById = function (id) {
  return $authors.get({id: id})
}
AuthorProvider.new = function (user) {
  return $authors.save(user)
}

AuthorProvider.login = function (email, password) {
  console.log({email: email, password: password})
  return Vue.http.post(API_URL + 'authors/login', {email: email, password: password}, {});
}

AuthorProvider.isLoggedIn = function () {
  if(localStorage.getItem('user')){
    return true
  } else{
    return false
  }
}

AuthorProvider.logout = function () {
  localStorage.removeItem('user')
}
export default AuthorProvider
