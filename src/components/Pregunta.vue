<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
               <form class="form" @submit.prevent="new_trivia">
                        <h5>Añade una Trivia </h5>
                        <div class="input-field col s12 m12">
                            <div>
                                <input type="text" required="required" class="validate" v-model="add_pregunta">
                                <label class="active" for="first_name2">Pregunta</label>
                            </div>
                            <div>
                                <input type="text" required="required" class="validate" v-model="add_respuesta">
                                <label class="active" for="first_name2">Respuesta correcta</label>
                            </div>
                            <div>
                                <input type="text" required="required" class="validate" v-model="add_incorrecta1">
                                <label class="active" for="first_name2">Respuesta Incorrecta 1</label>
                            </div>
                            <div>
                                <input type="text" required="required" class="validate" v-model="add_incorrecta2">
                                <label class="active" for="first_name2">Respuesta Incorrecta 2</label>
                            </div>
                            <div>
                                <input type="text" required="required" class="validate" v-model="add_incorrecta3">
                                <label class="active" for="first_name2">Respuesta Incorrecta 3</label>
                            </div>
                            <div class="input-field col s6 m6">
                                <a type="submit" @click="new_trivia" class="waves-effect waves-light btn">AÑADIR!</a>
                            </div>
                            <div class="input-field col s6 m6">
                                <a type="submit" @click="cancel_pregunta" class="waves-effect waves-light btn">CANCELAR</a>
                            </div>
                        </div>      
                </form>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase'


export default {
    name: 'Pregunta',
    data() {
        return {
            // datos de nuestras preguntas
            add_pregunta: '',
            add_respuesta: '',
            add_incorrecta1: '',
            add_incorrecta2: '',
            add_incorrecta3: '',
        }
    },
    methods: {
        new_trivia() {
            console.log('new_trivia');
            let respuesta_random = [
                {text: this.add_respuesta, correct: true},
                {text: this.add_incorrecta1, correct: false},
                {text: this.add_incorrecta2, correct: false},
                {text: this.add_incorrecta3, correct: false},
            ];
            respuesta_random = respuesta_random.sort(() => 0,5 - Math.random())

            db.collection('trivia').add({
                pregunta: this.add_pregunta,
                respuesta: respuesta_random
            })
            .then(() => {
                this.add_pregunta = '';
                this.$router.push('/trivias')
            })

            this.add_pregunta = '';
            this.add_respuesta = '';
            this.add_incorrecta1 = '';
            this.add_incorrecta2 = '';
            this.add_incorrecta3 = '';
            
        },
        cancel_pregunta() {
            this.$router.push('/trivias')
        }
    },
    firestore() {         
    return {
      trivia: db.collection('trivia')
    }
  },
}
</script>
<style>
h5 {
    margin-top: 60px;
}

</style>