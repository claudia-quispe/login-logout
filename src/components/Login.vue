<template>
    <div class="row">
        <div class="col m12 s12" id="error-message" v-if="error">
            <div class="card-panel red">{{ error }}</div>
        </div>
        <div class="col s6 m6">
            <h5>Register</h5>
            <form action="" @submit.prevent="register">
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="email" class="validate" required v:model="register_email">
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="password" class="validate" required v:model="register_password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="password" class="validate" required v:model="register_confirm_password">
                    <label for="password">Confirm Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="submit" class="btn" />
                    </div>
                </div>
            </form>
        </div>
        <div class="col s6 m6">
            <h5>Login</h5>
            <form action="" @submit.prevent="login">
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="email" class="validate" required v-model="login_email">
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6">
                    <input type="password" class="validate" required v-model="login_password">
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
    data() {
        return {
            // datos para registro
            register_email: '',
            register_password: '',
            register_confirm_password: '',

            //datos para login
            login_email: '',
            login_password: '',

        }
    },
    computed: {
        error() {
            return this.$store.state.error;
        }
    },
    methods: {
        login() {
            console.log('login')
        },
        register() {
            const confirm = document.getElementById('confirm')
            confirm.setCustomValidity('');

             // acá verificamos que ambas contraseñas sean iguales
            if(this.register_password != this.register_confirm_password){
                confirm.setCustomValidity('Ambas contraseñas deben coindicir');
                return;
            }

            //acá registramos al usuario
            const datos = {email: this.register_email, password: this.register_password};
            this.$store.dispatch('register', datos)
        }
    }
}
</script>