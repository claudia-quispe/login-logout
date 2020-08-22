<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
            <form @submit.prevent="nueva_trivia"></form>
                <h5>TRIVIA GAME</h5>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">pregunta</span>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Super Nintendo</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Poly Station 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 3DS</span>
                        </label>
                    </div>
                </div>
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">¿ Cuál de los siguiente juegos no es de nintendo ?</span>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Super Nintendo</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Poly Station 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 3DS</span>
                        </label>
                    </div>
                </div>

                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">¿ Cuál de los siguiente juegos no es de nintendo ?</span>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Super Nintendo</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Poly Station 64</span>
                        </label>
                        <label class="respuesta">
                            <input name="group1" type="radio" checked />
                            <span>Nintendo 3DS</span>
                        </label>
                    </div>
                    <div class="input-field col s6 m6">
                        <a type="submit" @click="cancel_trivia" class="waves-effect waves-light btn">CANCELAR</a>
                    </div>
                    <div class="input-field col s6 m6">
                        <a type="submit" @click="cargar_trivia" class="waves-effect waves-light btn">CARGAR</a>
                    </div>
                </div>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>
<script>
//import { db } from '@/firebase';

export default {
    name: 'Trivia',
    data() {
        return {
            preguntas: [],
            respuesta: [],
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
        }
    },
    methods: {
        cancel_trivia() {
            this.$router.push('/')
        },
        cargar_trivia() {
            this.$router.push('/')
        }
    },
    

    firestore() {
        return {
            //preguntas: db.collection('preguntas')
        }
    }
}
</script>
<style>
.respuesta {
    font-size: .8rem;
    color: #9e9e9e;
    display: flex;
}
h5 {
    margin: 60px;
}

</style>