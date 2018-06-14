<template>
  <div id="todo-app">
    <router-view/>
    <footer class="info">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="/links">Vue Links</router-link></p>
      <p><router-link to="/old">Old Todos</router-link></p>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/index.css"></style>
