<template>
  <div id="app">
    <AddUser/>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'

export default {
  name: 'app',
  components: {
    AddUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>