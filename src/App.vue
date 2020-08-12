<template>
  <div id="app">
    <nav>
        <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/login" v-if="usuario" class="out"><a href="#">LOG OUT</a></router-link></li>
            </ul>
            <a href="#" class="brand-logo">El muro</a>
        </div>
    </nav>
    <router-view />
    <h5 v-if="usuario" class="brand-logo">Bienvenido, {{ usuario.nombre }}!</h5>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    usuario() {
      return this.$store.state.usuario;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  
}
.welcome-1 {
  width: 80%;
  padding-top: 10px;
}
#nav-mobile {
  background-color:#000000  !important;
}
.nav-wrapper {
  background-color: #000000 !important;
}
.h5 {
  padding: 20px;
}
</style>
