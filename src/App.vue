<template>
  <div id="app">
    <nav class="green accent-3" role="navigation">
      <div class="nav-wrapper container">
        <router-link :to="{name: 'home'}" id="logo-container" class="brand-logo tooltipped"
                     data-tooltip="Home" data-position="bottom" data-delay="50">Vue Blog
        </router-link>
        <ul class="right hide-on-med-and-down">
          <li v-show="isLoggedIn" class="tooltipped" data-tooltip="Profile" data-position="bottom" data-delay="50">
            <router-link :to="{name: 'profile'}"><i
              class="material-icons">assignment_ind</i></router-link>
          </li>
          <li v-show="isLoggedIn" class="tooltipped" data-tooltip="New Article" data-position="bottom" data-delay="50">
            <router-link :to="{name: 'new'}"
            ><i class="material-icons">edit</i></router-link>
          </li>
          <li v-show="!isLoggedIn" class="tooltipped" data-tooltip="Login" data-position="bottom" data-delay="50">
            <router-link :to="{name: 'login'}"><i
              class="material-icons">perm_identity</i></router-link>
          </li>
          <li v-show="!isLoggedIn" class="tooltipped" data-tooltip="Signup" data-position="bottom" data-delay="50">
            <router-link :to="{name: 'signup'}"><i
              class="material-icons">perm_identity</i></router-link>
          </li>
          <li v-show="isLoggedIn" @click.prevent="logout" class="tooltipped" data-tooltip="Logout"
              data-position="bottom" data-delay="50">
            <a href="" role="button"> <i class="material-icons">input</i></a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import AuthorProvider from './providers/AuthorProvider'
export default {
  name: 'app',
  data(){
    return{
      isLoggedIn: false
    }
  },
  methods: {
    logout(){
      AuthorProvider.logout()
    }
  },
  created(){
    this.isLoggedIn = AuthorProvider.isLoggedIn()
  }
}






</script>

<style>

</style>
