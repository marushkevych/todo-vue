<template>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer v-if="todos.length" class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{itemsLeft}}</strong> {{itemsLeftLabel}}</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <router-link to="/">All</router-link>
        </li>
        <li>
          <router-link to="/active">Active</router-link>
        </li>
        <li>
          <router-link to="/completed">Completed</router-link>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button v-if="doneTotal" 
              class="clear-completed" 
              @click="$emit('clearCompleted')">
        Clear completed
      </button>
    </footer>
</template>

<script>
export default {
  props: ['todos'],
  computed: {
    doneTotal: function() {
      return this.todos.filter(t => t.done).length
    },
    itemsLeft: function() {
      return this.todos.length - this.doneTotal
    },
    itemsLeftLabel: function() {
      return this.itemsLeft === 1 ? 'item left' : 'items left'
    }
  },
  methods: {
    clearCompleted: function() {
      this.todos.filter(t => t.done).forEach(this.remove)
    },
  }
}
</script>
