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

const store = new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    set_user(state, new_user){
      state.user = new_user;
    },
    set_error(state, new_error){
      state.error = new_error;
    }
  },
  
  actions: {
    register(context, datos){
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
      // si es que el registro es exitoso
      .then(function (respuesta) {
        console.log(respuesta)
        context.commit('set_error', null);
        context.commit('set_user', datos.email);
        router.push('/');
      })
      // si ocurre un error
      .catch(function (error) {
        context.commit('set_error', error.message);
        context.commit('set_user', null);
      });
    }
  }
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
