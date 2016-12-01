<template>
  <div>
    <h1 style="color: #64b5f6">Signup</h1>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input v-model="user.firstname" id="first_name" type="text" class="validate" required>
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input v-model="user.lastname" id="last_name" type="text" class="validate" required>
            <label for="last_name">Last Name</label>
          </div>

        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="user.email" id="email" type="email" class="validate" required>
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="user.password" id="password" type="password" class="validate" required>
            <label for="password">Password</label>
          </div>
          <div class="input-field col s6">
            <input v-model="retypePassword" id="retype_password" type="password" class="validate" required>
            <label for="password">Retype Password</label>
            <i class="material-icons tooltipped" v-if="user.password !== retypePassword && retypePassword"  data-tooltip="Incompatibles Passwords" data-position="right" data-delay="50">warning</i>
          </div>
        </div>
        <div class="row">
          <button @click.prevent="signup" class="waves-effect waves-light btn col s4  offset-s4">Submit<i
            class="material-icons right">send</i>
          </button>
        </div>

      </form>
    </div>
  </div>
</template>
<style>
</style>
<script>
import store from '../store/Author'
import AuthorProvider from '../providers/AuthorProvider'
import Vue from 'vue'
    export default{
    store: store,
        data(){
            return{
                user: {},
                retypePassword: ''
            }
        },
        methods:{
          signup(){
            console.log(this.user)
           AuthorProvider.new(this.user).then((response) => {
              this.$router.go('/login')
            }, (err) => {
              console.error(err)
            })
          }
        }
    }


</script>
