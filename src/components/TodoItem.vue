<template>
  <!-- List items should get the class `editing` when editing and `completed` 
  when marked as completed -->
  <li :class="{completed: todo.done, editing: editing}">
    <div class="view">
      <input :id="todo.id" class="toggle" type="checkbox" :checked="todo.done" @click="toggle">
      <label @dblclick="editing = true">{{ todo.text }}</label>
      <button class="destroy" @click="remove"></button>
    </div>
    <!-- One-directional data flow: -->
    <input class="edit" 
           v-focus="editing"
           :value="todo.text"
           @keyup.enter="update"
           @blur="update"
           @keyup.esc="editing = false">
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  data() {
    return {
      editing: false
    }
  },
  methods: {
    // One-directional data flow:
    toggle: function() {
      this.$emit('toggle', !this.todo.done)
    },
    remove: function() {
      this.$emit('remove')
    },
    update: function(event) {
      this.editing = false
      this.$emit('update', event.target.value)
    }
  },
  directives: {
    focus: {
      // directive definition
      componentUpdated: function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
}
</script>
