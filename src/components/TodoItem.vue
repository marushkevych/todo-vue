<template>
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{completed: todo.done}">
    <div class="view">
      <input :id="todo.id" class="toggle" type="checkbox" :checked="todo.done" @click="toggle">
      <label>{{ todo.text }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" :value="todo.text">
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  methods: {
    // One-directional data flow:
    toggle: function() {
      this.$emit('toggle', !this.todo.done)
    }
  }
}
</script>
