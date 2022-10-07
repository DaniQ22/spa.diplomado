<template>
    <div class="py-12">
        <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div>
                        <h2>Tipos de habitaciones</h2>
                    </div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="habitacion in tipo_habitacion " :key="habitacion.id">
                                <td scope="row"> {{habitacion.id}} </td>
                                <td> {{habitacion.name}} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
            .then(response => (
                this.tipo_habitacion = response.data
                ))
        },
        data() {
            return {
                tipo_habitacion: []
            }
        }
    }
</script>