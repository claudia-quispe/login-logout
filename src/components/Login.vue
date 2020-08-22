<template>
    <div class="row">
        <div class="col s12 m12" v-if="error != null">
            <p>{{ error }}</p>
        </div>
        <div class="col s2 m2"></div>
        <div id="relogin" class="col s3 m3">
            <h6 class="titulo">Ingresa a tu cuenta</h6>
            <form action="" @submit.prevent="registro">
                <div class="row">
                    <div class="input-field s6 m6">
                        <i class="material-icons prefix">account_box</i>
                        <input type="text" required v-model="registrar_nombre">
                        <label for="nombre">Nombre</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                        <i class="material-icons prefix">email</i>
                        <input type="email" required v-model="registrar_email">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" class="validate" required v-model="registrar_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" id="confirmar" class="validate" required v-model="registrar_confirm_password">
                    <label for="password">Confirmar Password</label>
                    <p v-if="registrar_error" class="error">Has introducido mal la contraseña.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s12" >
                        <button type="submit" class="btn" name="action">Registrarte</button>
                    </div>
                </div>
            </form>
        </div>
        <div id="relogin" class="col s3 m3">
            <h6 class="titulo">Inicia Sesión</h6>
            <form action="" @submit.prevent="login">
                <div class="row">
                    <div class="input-field s6 m6">
                    <i class="material-icons prefix">email</i>
                    <input type="email" class="validate" id="email" required v-model="login_email">
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6 m6">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" class="validate" id="password" required v-model="login_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">   
                    <button type="submit" class="btn" name="action">Entrar</button>
                </div>
            </form>
        </div>
        <div class="col s2 m3"></div>
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
            registrar_nombre: '',

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
                
                return;
            }
            //despues del if podemos registrar al usuario

            // acá registramos al usuario, llamando a la accion 
            // creo el const datos para que la llamada debe recibir 2 datos
            // cuando entreguemos los datos a la accion, le entregamos 3 cosas, name pass y email
            const datos = {
                email: this.registrar_email,
                password: this.registrar_password,
                nombre: this.registrar_nombre
                };
            // aca se lo entregamos a la accion "registro" en main
            this.$store.dispatch('registro', datos)
        }
    }
}
//<img class="home" alt="Vue logo" src="./assets/home.png">
</script>
<style scoped>
#error-mensaje {
    font-size: 1,7rem;
    font-weight: bold;
}
h6 .titulo {
    padding: 20px;
    
}
#relogin {
    margin-top: 50px;
    background-color: #f5f5f5 !important;
    border-radius: 10px;
    margin: 25px 20px;
    padding: 8px 30px;
    box-shadow: 2px 2px 5px rgb(192, 190, 190);
    margin-top: 50px;
}
.row {
    text-align: center;
}
.btn {
    background-color: #000000;
}



</style>
