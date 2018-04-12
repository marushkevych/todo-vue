<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>Taste JavaScript</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template">
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web">
        </li>
      </ul>
    </section>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>0</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Clear completed</button>
    </footer>
  </section>

</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'todos',
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
