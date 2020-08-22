import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Login from '@/components/Login'
import Home from '@/components/Home'
import Pregunta from '@/components/Pregunta'
import Trivia from '@/components/Trivia'


Vue.use(VueRouter);    // instalamos explícitamente el router

//acá añadimos nuestras rutas

//export default new VueRouter({
// agregamos const router para dejarlo como variable
const router = new VueRouter({
    routes: [
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/', 
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/pregunta', 
            component: Pregunta,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/trivia:id', 
            component: Trivia,
            meta: {
                requiresAuth: true
            }
        },
    ]
})
//con beforeEach redireccionamos rutas protegidas y otras no
//beforeEach recibe un argumento y la funcion() recibe 3 argumentos
// to(destino): hacia donde me dirijo, from: desde donde vengo, next:hacia donde me dirijo

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser; // acá nos traemos al usuario actual
    //console.log(currentUser); // acá muestra en consola al usuario actual
    // acá ejecutamos next(), next vacio es solo para seguir

    // si el destino protegido y el usuario es null nos redirige a /login 
    if(to.meta.requiresAuth && currentUser == null) {
        next('/login') 
    }   else {
        next()
    }
})

export default router;