<template>
  <div id="app">
    <nav>
        <div class="nav-wrapper">
            <ul id="nav-mobile" class="left">
              <li><button v-if="usuario" @click="logout" class="out" >LOG OUT</button></li>
              <li><router-link v-bind:to="{ path: `/` }"> Home </router-link></li>
              <li><router-link v-bind:to="{ path: `/pregunta/` }"> Agregar una pregunta </router-link></li>
            </ul>
        </div>
    </nav>
    <h5 v-if="usuario" class="brand-logo">Hola {{ usuario.nombre }}!</h5>
    <router-view />
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
  background-color:#746d6d  !important;
}
.nav-wrapper {
  background-color: #beb8b8 !important;
}
.h5 {
  padding: 20px;
}
.consultorio {
  text-align: left;
  display: block;
  padding-left: 30px;
}
.brand-logo {
  margin-top: 30px;
}
</style>
