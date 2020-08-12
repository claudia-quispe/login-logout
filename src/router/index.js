import Vue from 'vue';
import VueRouter from 'vue-router';


import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(VueRouter);    // instalamos explícitamente el router

//acá añadimos nuestras rutas
export default new VueRouter({
    routes: [
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/', 
            component: Home
        },
        
    ]
})