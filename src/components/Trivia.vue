<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
                <h4>TRIVIA GAME</h4>
            <form @submit.prevent="jugar_trivia">
                <div class="pregunta">
                    <div class="card teal black" >
                        <div class="card-content white-text" v-for="(pregunta ,i) in preguntas.slice(0,3)" :key="pregunta.id">
                            <span class="card-title ">{{pregunta.pregunta}}</span>

                            <label class="respuesta" >
                                <input :name="pregunta.id" type="radio" :value="pregunta.respuesta[0].correct ? 'OK': 'NONE'" v-model="form.respuestas[i]" />
                                <span>{{ pregunta.respuesta[0].text }}</span>
                            </label>
                            <label class="respuesta">
                                <input :name="pregunta.id" type="radio" :value="pregunta.respuesta[1].correct ? 'OK': 'NONE'" v-model="form.respuestas[i]" />
                                <span>{{ pregunta.respuesta[1].text }}</span>
                            </label>
                            <label class="respuesta">
                                <input :name="pregunta.id" type="radio" :value="pregunta.respuesta[2].correct ? 'OK': 'NONE'" v-model="form.respuestas[i]" />
                                <span>{{ pregunta.respuesta[2].text }}</span>
                            </label>
                            <label class="respuesta">
                                <input :name="pregunta.id" type="radio" :value="pregunta.respuesta[3].correct ? 'OK': 'NONE'" v-model="form.respuestas[i]" />
                                <span>{{ pregunta.respuesta[3].text }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="input-field col s6 m6">
                    <a type="submit" @click="cancel_trivia" class="waves-effect waves-light btn">CANCELAR</a>
                </div>
                <div class="input-field col s6 m6">
                    <input type="submit" class="waves-effect waves-light btn">
                </div>
            </form>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>
<script>
import { db } from '@/firebase';
import firebase from 'firebase';

const getDate = () => {
    const trailing = (d) => d < 10 ? '0'+d : d;
    const now = new Date();
    return `${now.getFullYear()}-${trailing(now.getMonth())}-${trailing(now.getDate())} ${trailing(now.getHours())}:${trailing(now.getMinutes())}:${trailing(now.getSeconds())}`;
}

export default {
    name: 'Trivia',
    data() {
        return {
            form: {
                respuestas: [],
            }
        }
    },
    
    methods: {
        // la trivia
        jugar_trivia() {
            console.log(this.form.respuestas)

            let jugando_trivia = 0;
            if (this.form.respuestas[0] == 'OK') {
                jugando_trivia++;
            }
            if (this.form.respuestas[1] == 'OK'){
                jugando_trivia++;
            }
            if (this.form.respuestas[2] == 'OK') {
                jugando_trivia++;
            }

            const porcentaje = Math.round((jugando_trivia / 3)*100);
            
            db.collection('jugar').add({
                nombre: firebase.auth().currentUser.displayName,
                puntaje: jugando_trivia,
                porcentaje: porcentaje,
                fecha: getDate()
            })

            .then(() => {
                this.$router.push('/')
            })

        },
        
        cancel_trivia() {
            this.$router.push('/')
        },
    },

    firestore() {
        return {
            preguntas: db.collection('trivia')
        }
    }
}
</script>

<style>
.respuesta {
    font-size: .8rem;
    color: #ffffff;
    display: flex;
}
h4 {
    margin: 60px;
    font-weight: bold;
}
.card .card-title {
    font-size: 20px;
    font-weight: normal;
}
</style>