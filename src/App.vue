<template>
  <div id="app">
    <img class="home" alt="Vue logo" src="./assets/home.png">
    <login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #009aff;
  margin-top: 60px;
}
.home {
  width: 15%;
}
</style>
