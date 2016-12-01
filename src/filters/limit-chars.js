import Vue from 'vue'
let limitChars = Vue.filter('limit-chars', function (text, number) {
  return text.substr(0, number)
})

export default limitChars
