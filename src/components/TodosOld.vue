<template>
  <div id="todoApp">
    <h2>TODOS</h2>
    <button @click="toggleAll">{{toggleAllLabel}}</button>
    <ul>
      <todo-item v-for="todo in todos"
                :key="todo.id"
                :todo="todo" 
                @toggle="toggle($event, todo)">
      </todo-item>
    </ul>
    <div>Done: {{doneTotal}}</div>
    <input type="text" v-model="newTodoText">
    <button @click="add">Add</button>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItemOld'

export default {
  name: 'todos-old',
  components: {
    TodoItem
  },
  data: function() {
    return {
      newTodoText: '',
      todos: [
        {id: '0', text: 'foo', done: false},
        {id: '1', text: 'bar', done: true}
      ]
    }
  },
  computed: {
    doneTotal: function() {
      return this.todos.filter(t => t.done).length
    },
    allDone: function() {
      return this.doneTotal === this.todos.length
    },
    toggleAllLabel: function() {
      return this.allDone ? 'untick all items' : 'all done'
    }
  },
  methods: {
    add: function() {
      if(this.newTodoText) {
        this.todos.push({
          id: this.todos.length,
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
    }
  }
}
</script>

<style>

</style>
