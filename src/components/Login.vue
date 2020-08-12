<template>
    <div class="row">
        <div class="col s12 m12" v-if="error != null">
            <p>{{ error }}</p>
        </div>
        <div class="col s6 m6">
            <h5>Register</h5>
            <form action="" @submit.prevent="registro">
                <div class="row">
                    <div class="input-field s6 m6">
                        <input type="email" required v-model="registrar_email">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                    <input type="password" class="validate" required v-model="registrar_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                    <input type="password" id="confirmar" class="validate" required v-model="registrar_confirm_password">
                    <label for="password">Confirm Password</label>
                    <p v-if="registrar_error" class="error">Has introducido mal la contraseña.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s12" >
                        <button type="submit" class="btn" name="action"> Enviar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col s6 m6">
            <h5>Login</h5>
            <form action="" @submit.prevent="login">
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="email" class="validate" id="email" required v-model="login_email">
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="password" class="validate" id="password" required v-model="login_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="submit" class="btn" />
                    </div>
                </div>
            </form>
        </div>
    </div>
     
</template>

<script>

export default {
    name: 'Login',
    // en mi objeto data capturo datos del formulario
    data() {
        return {
            // datos para registro
            registrar_email: '',
            registrar_password: '',
            registrar_confirm_password: '',
            registrar_error: '',

            //datos para login
            login_email: '',
            login_password: '',
            
        }
    },
    //acá traigo una variable calculada
    computed: {
        error() {
            return this.$store.state.error;
        }
    },
    // acá declaro mi manejadores login y register
    methods: {

        login() {
            const datos = {email: this.login_email, password: this.login_password};
            this.$store.dispatch('login',datos)
        },
        registro() {
            // esta es mi validacion
            //const confirm = document.getElementById('confirm')
            //confirm.setCustomValidity('');

            // acá verificamos que ambos password sean iguales
            // accedemos a las variables con nuestro constructor this
            // si las contraseñas son diferentes damos el alert
            this.registrar_error = null
            if(this.registrar_password != this.registrar_confirm_password){
                this.registrar_error='Ambas contraseñas deben ser iguales';
                console.log('holaa');
                
                return;
            }
            //despues del if podemos registrar al usuario

            // acá registramos al usuario, llamando a la accion 
            // creo el const datos para que la llamada debe recibir 2 datos
            const datos = {email: this.registrar_email, password: this.registrar_password};
            this.$store.dispatch('registro', datos)
        }
    }
}
</script>
<style scoped>
#error-mensaje {
    font-size: 1,7rem;
    font-weight: bold;
}

</style>