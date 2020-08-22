<template>
  <div id="app">
    <nav>
        <div class="nav-wrapper">
          <h6 v-if="usuario" class="brand-logo">Hola {{ usuario.nombre }}!</h6>
            <ul id="nav-mobile" class="right">
              <li><router-link v-bind:to="{ path: `/` }">HOME</router-link></li>
              <li><router-link v-bind:to="{ path: `/pregunta/` }"> AGREGA UNA PREGUNTA</router-link></li>
              <li><button v-if="usuario" @click="logout" >LOG OUT</button></li>
            </ul>
        </div>
    </nav>
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
  background-color:#000000  !important;
}
.nav-wrapper {
  background-color: #000000 !important;
}
.h5 {
  padding: 25px;
}

.brand-logo {
  margin-top: 7px;
}
nav .brand-logo {
    position: absolute;
    color: #fff;
    display:block; 
    font-size: 1.8rem;
    padding: 10px;
}
</style>
