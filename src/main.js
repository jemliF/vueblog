import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
//import AuthorService from './providers/AuthorProvider'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    'name': 'home',
    path: '/',
    component: require('./components/Home.vue')
  }, {
    'name': 'profile',
    path: '/profile',
    component: require('./components/Profile.vue')
  }, {
    'name': 'login',
    path: '/login',
    component: require('./components/Login.vue')
  }, {
    'name': 'new',
    path: '/new',
    component: require('./components/New.vue')
  }, {
    'name': 'signup',
    path: '/signup',
    component: require('./components/Signup.vue')
  }, {
    'name': 'logout',
    path: '/logout'
  }, {
    'name': 'article',
    path: '/article/:id',
    component: require('./components/Article.vue')
  }]
})

router.beforeEach((to, from, next) => {
  //console.log(to, from)
  if (!localStorage.getItem('user') && (to.name !== 'login' || to.name !== 'signup' )) {
    next('/login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(require('./App'))
  //components: {require('./App')}
})
