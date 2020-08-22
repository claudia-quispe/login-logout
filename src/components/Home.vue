<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
            <h6 class="titulo_click">Haz click en el botón para jugar!</h6>
               <a class="waves-effect waves-light btn-large" type="submit" @click="jugar" value="jugar" >JUGAR</a>
               <table>
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Puntaje</th>
                        <th>Porcentaje</th>     
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>

<script>
//import { db } from '@/firebase'
import 'firebase/auth';
import router from '@/router'

export default {
    name: 'Home',
    data() {
        return {

        }
    },
    methods: {
        jugar() {
            router.push('/trivias');
        },
    },
    firestore() {
        return {

        }
    }
}

</script>

<style>
.waves-effect {
    margin: 30px;
}
.titulo_click {
    margin-top: 60px;
}

</style>


