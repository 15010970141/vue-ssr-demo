<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下去要做什么?"
            @keyup.enter="addTodo"
        >
        <Item
            :todo="todo"
            v-for="todo in filteredTodos"
            :key="todo.id"
            @del="deleteTodo"
        />
        <Tabs
            :filter="filter"
            :todos="todos"
            @togole="togoleFilter"
            @clearAllCompleted="clearAllCompleted"
        ></Tabs>
        <!-- <router-view/> -->
    </section>
</template>

<script>
import {
  mapState,mapActions
} from 'vuex'
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  metaInfo: {
    title: 'The todo App' // 默认使用最里面的
  },
  data () {
    return {
      filter: 'all',
      
    }
  },
   mounted () {
    // if (this.todos && this.todos.length < 1) {
    //   this.fetchTodos()
    // }
    // console.log(this.$store);
  },
   asyncData ({ store, router }) {
    // console.log(store);
    //   console.log(store.actions);
  return store.dispatch('fetchTodos')
   
    // router.replace('/login')
    // return Promise.resolve()
  },
  components: {
    Item,
    Tabs
  },
  computed: {
       ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
     ...mapActions([
      'fetchTodos'
    ]),
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
      console.log(this.todos)
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    togoleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style  scoped>
.real-app{
 width:600px;
    margin:0 auto;
    box-shadow:0 0 5px #666;
}

.add-input{
  position:relative;
    margin: 0;
    width :100%;
    font-size:24px;
    font-family:inherit;
    font-weight:inherit;
    line-height: 1.4em;
    border:none;
    outline:none;
    color:inherit;
    box-sizing: border-box;
    padding:16px 16px 16px 36px;
    border: none;
    box-shadow:inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

</style>
