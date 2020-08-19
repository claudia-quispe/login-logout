<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
                <div class="col s6 m6">
                    <form class="form" @submit="add_cita">
                        <h5>Agenda tu hora</h5>
                        <div class="input-field col s4 m4">
                            <input type="text" required="required" class="datepicker" v-model="add_fecha">
                            <label class="active" for="first_name2">Añadir fecha:</label>
                        </div>
                        <div class="input-field col s4 m4">
                            <input type="text" required="required" class="timepicker" v-model="add_hora">
                            <label class="active" for="first_name2">Añadir hora:</label>
                        </div>
                        <div class="input-field col s8 m8">
                            <input type="text" required="required" class="validate" v-model="add_motivo">
                            <label class="active" for="first_name2">Motivo:</label>
                            <div class="input-field col s6 m6">
                                <a type="submit" @click="cancel_cita" class="waves-effect waves-light btn">CANCELAR</a>
                            </div>
                            <div class="input-field col s6 m6">
                                <a type="submit" @click="add_cita" class="waves-effect waves-light btn">AGENDAR</a>
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
import M from 'materialize-css'

export default {
    name: 'Cita',
    data() {
        return {
            //datos de nuestra cita
            add_fecha: '',
            add_hora: '',
            add_motivo: '',
        }
    },
    methods:{
        add_cita() {
            console.log('el manejador click si esta llegando')
            db.collection('citas').add({
                fecha: this.add_fecha,
                hora: this.add_hora,
                motivo: this.add_motivo,
            })
            // indicamos la pagina donde redirecciona
            .then(() => {
                this.$router.push('/')
            })

            // limpiamos el formulario
            this.add_fecha = '';
            this.add_hora = '';
            this.add_motivo = ''; 
        },
        cancel_cita() {

        }

    },
    // acá activamos nuestro calendario y hora
    mounted() {
        const fecha = document.querySelectorAll('.datepicker');
        M.Datepicker.init(fecha, {});

        const hora = document.querySelectorAll('.timepicker');
        M.Timepicker.init(hora, {});
    },
   
    firestore() {
        return {
            citas: db.collection('citas')
        }
    }

}
</script>

<style>
h5 {
    margin-top: 10px;
    text-align: center;
}
.form {
    border-radius: 10px;
    border: solid 1px white;
    margin: 25px 20px;
    padding: 30px;
    box-shadow: 2px 2px 5px rgb(192, 190, 190);
    height: 450px;
    margin: auto;
    text-align: center;
}
.row .col {
    margin-top: 50px;
}
</style>