<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <!-- <p>counter:{{counter}}</p>
         <p>fullName:{{fullName}}</p>
           <p>textPlus:{{textPlus}}</p>
           <p>testA:{{testA}}</p> -->
        <!-- <Todo></Todo> -->
        <router-link :to="{name:'app'}">app</router-link>
         <router-link to="/login">login</router-link>
         <!-- <transition name="fade"> -->
             <router-view/>
         <!-- </transition> -->

        <Footer></Footer>
          <!-- <router-view name='a'/> -->
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './pages/todo/todo.vue'
export default {
  metaInfo: {
    title: 'joky\'s  Todo App'
  },
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
  
  },
  computed:{

  },
  methods:{
  
  }
}
</script>

<style  scoped>
#app{
position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
}

    #cover{
  position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:#999;
        opacity:0.2;
        z-index:-1;
    }

</style>
