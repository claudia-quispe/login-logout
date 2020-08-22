<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
               <h3>Hola, !</h3>
               <p>Elije una pregunta y selecciona la respuesta correcta</p>
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
                </div>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Trivia',
    data() {
        return {
            
        }
    },
    methods: {
        cancel_trivia() {
            this.$router.push('/')
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

</style>