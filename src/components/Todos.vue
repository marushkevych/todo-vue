<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" 
             class="new-todo" 
             placeholder="What needs to be done?" 
             autofocus 
             v-model="newTodoText"
             @keyup.enter="add">
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" 
             class="toggle-all" 
             type="checkbox" 
             @click="toggleAll" 
             :checked="allDone">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="todo in filtered"
          :key="todo.id"
          :todo="todo" 
          @toggle="toggle($event, todo)"
          @remove="remove(todo)"
          @update="update($event, todo)">
        </todo-item>
      </ul>
    </section>
    <todo-footer :todos="todos" @clearCompleted="clearCompleted"></todo-footer>
  </section>

</template>

<script>
import nanoid from 'nanoid'
import TodoItem from '@/components/TodoItem'
import TodoFooter from '@/components/TodoFooter'

export default {
  name: 'todos',
  components: {
    TodoItem,
    TodoFooter
  },
  data: function() {
    return {
      newTodoText: '',
      todos: []
    }
  },
  computed: {
    allDone: function() {
      return this.todos.filter(t => !t.done).length === 0
    },
    filtered: function() {
      switch (this.$route.params.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done)
        case 'completed':
          return this.todos.filter(todo => todo.done)
        default:
          return this.todos
      }
    }
  },
  methods: {
    add: function() {
      if(this.newTodoText) {
        this.todos.push({
          id: nanoid(),
          text: this.newTodoText, 
          done: false
        })
        this.newTodoText = ''
      }
    },
    toggle: function(isDone, todo) {
      todo.done = isDone
    },
    toggleAll: function() {
      const checked = !this.allDone
      this.todos.forEach(el => el.done = checked)
    },
    remove: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    clearCompleted: function() {
      this.todos.filter(t => t.done).forEach(this.remove)
    },
    update: function(newText, todo) {
      todo.text = newText
    }
  }
}
</script>
