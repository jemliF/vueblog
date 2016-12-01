<template>
  <div>
    <h1 style="color: #64b5f6">Home</h1>
    <div class="row">
      <div class="col s12 m12">
        <div class="card  blue lighten-1 z-depth-4" v-for="article in articles">
          <div class="card-content white-text">
            <span class="card-title">{{article.title}}</span>
            <p class="white-text">{{article.content | limitChars(200)}}...</p>
          </div>
          <div class="card-action">
            <router-link :to="{name: 'article', params: {id: article._id}}">Continue Reading</router-link>
          </div>
        </div>
      </div>
    </div>
    <!--pre>
      {{articles}}
    </pre-->
  </div>
</template>
<style>
</style>
<script>
  import store from '../store/Article'
  import Vuex from 'vuex'
  import limitChars from '../filters/limit-chars'
  import AuthorProvider from '../providers/AuthorProvider'
    export default{
        store: store,
        filters: {limitChars},
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        },
        computed: {
          ...Vuex.mapGetters(['articles', 'myArticles'])
        },
        mounted(){
          store.dispatch('getArticles')
        }
    }
</script>
