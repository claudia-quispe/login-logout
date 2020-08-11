import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app';
import 'firebase/auth'
import './firebase.js'

import VueFirestore from 'vue-firestore';
import router from '@/router';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFirestore, {key: 'id'});

//acá creamos nuestro almacén

const store = new Vuex.Store({
  //en mi estado tengo un usuario y mensaje de error
  state: {
    usuario: null,
    error: null,
  },

  mutations: {
    //mutacion para cambiar el "usuario"
    //nuevo_usuario es mi argumento
    set_usuario(state, nuevo_usuario){
      state.usuario = nuevo_usuario;
    },
    //mutacion para cambia el "error"
    set_error(state, nuevo_error){
      state.error = nuevo_error;
    }
  },
  // las acciones se utilizan cuando necesito crear una funcion asincrona
  // acá llamamos a la accion àra registrar al usuario
  actions: {
    registro(context, datos){
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)

      // si es que el registro es exitoso, ejecuto esta función
      .then(function (respuesta) {
        console.log(respuesta)
        context.commit('set_error', null);
        context.commit('set_usuario', datos.email);
        router.push('/');
      })

      // acá creamos otro then para registrar el nombre


      // si ocurre un error
      .catch(function (error) {
        //console.log(error)
        context.commit('set_error', error.message);
        context.commit('set_usuario', null);
      });
    },
    /*login() {
      firebase.auth().signInWithEmailAndPassword(this.login_email, this.login_password)
        .then(user => {
          
         // this.$router.push({'login'})

        }).catch(error)

    }*/
  }
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
