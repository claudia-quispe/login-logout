<template>
    <div class="row">
        <div class="col m12 s12" id="mensaje-error" v-if="error">
            <div class="card-panel red">{{ error }}</div>
        </div>
        <div class="col s6 m6">
            <h5>Register</h5>
            <form action="" @submit.prevent="registro">
                <div class="row">
                    <div class="input-field">
                        <input type="email" required v:model="registrar_email">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                    <input type="password" class="validate" required v:model="registrar_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                    <input type="password" id="confirmar" class="validate" required v:model="registrar_confirmar_password">
                    <label for="password">Confirm Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
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
                    <p v-if="error" class="error">Has introducido mal el email o contraseña.</p>
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
            registrar_confirmar_password: '',

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
    methods: {
        // acá declaro mi manejadores login y register

        login() {
            this.error = ''
            if (this.login_email == this.login_password) {
                console.log(this.login_email)
                console.log(this.login_password); 
            }
        },
        
        registro() {
            // esta es mi validacion
            //const confirm = document.getElementById('confirm')
            //confirm.setCustomValidity('');

            // acá verificamos que ambos password sean iguales
            // accedemos a las variables con nuestro constructor this
            // si las ocntraseñas son diferentes damos el alert
            if(this.registrar_password != this.registrar_confirmar_password){
                alert('Ambas contraseñas deben ser iguales');
                return;
            }
            //despues del if podemos registrar al usuario

            //acá registramos al usuario, llamando a la accion 
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