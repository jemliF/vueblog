<template>
  <div>
    <h1 style="color: #64b5f6">Login</h1>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="email" type="email" class="validate" required v-model="user.email">
            <label for="email">Email</label>
          </div>
          <div class="input-field col s6">
            <input id="password" type="password" class="validate" required v-model="user.password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <button @click.prevent="login" class="waves-effect waves-light btn col s4  offset-s4">Submit<i
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
import AuthorProvider from '../providers/AuthorProvider'
import Vue from 'vue'
import store from '../store/Author'
    export default{
    store: store,
        data(){
            return{
                user: {}
            }
        },
        methods:{
          login(){
          console.log(this.user)
            AuthorProvider.login(this.user.email, this.user.password).then((response)=>{
              console.log(response)
              store.dispatch({type: 'updateProfile', user: response.body})
              localStorage.setItem('user', JSON.stringify(response.body))
            }, (err)=> {
              console.error(err)
            })
          }
        }
    }
</script>
