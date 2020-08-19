<template>
    <div>
        <div class="row">
            <div class="col s3 m3"></div>
            <div class="col s6 m6">
                <h6>Registro de horas solicitadas</h6>
                <table>
                    <thead>
                        <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Nombre</th>
                        <th>Motivo</th>
                        <th>Cancelar</th>      
                        </tr>
                    </thead>
                </table>
                <button type="submit" class="btn" name="action">Solicita tu hora</button>
            </div>
            <div class="col s3 m3"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            
        }
    }
}
</script>


