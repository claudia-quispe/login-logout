<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
               <h3>Home</h3>
               <a class="waves-effect waves-light btn-large" type="submit" >JUGAR</a>
               <h6>Haz click en el botón jugar!</h6>
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
export default {
    name: 'Home',
    computed: {
        usuario() {
            return this.$store.usuario;
        }
    }
}
</script>


