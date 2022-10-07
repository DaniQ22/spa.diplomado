<template>
    <div class="py-12">
        <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div>
                        
                    
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-9">
                                    <h1>{{this.hotel.name}}</h1>
                                    <p>Numero de habitaciones: {{this.hotel.num_rooms}}</p>
                                </div>
                                <div class="col-md-2">
                                    <button @click="crearHabitacion(this.hotel.id)"  class="btn btn-info md:justify-items-end">Crear Habitación</button>
                                </div>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">TIPO</th>
                                <th scope="col">ACOMODACIÓN</th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr class="" v-for="habitacion in habitaciones" :key="habitacion.id">
                                    <td scope="row">{{habitacion.type.name}}</td>
                                    <td >{{habitacion.accommodation.name}}</td>
                                    <td >{{habitacion.quantity}}</td>
                                    <td><button type="button" @click="editar(habitacion.id)" class="btn btn-secondary">Editar</button></td>
                                    <td><button type="button" @click="eliminar(habitacion.id)" class="btn btn-info">Eliminar</button></td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
                .then(response => (
                    this.hotel = response.data.data
                ))
    
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
                .then(response => (
                    this.habitaciones = response.data.data
                ))
        },
        data() {
            return {
                info: null,
                errores: {},
                hotel: [],
                habitaciones: [],
                success: null
            }
        },
        methods: {
            eliminar(id) {
                this.errores = {}
                if (confirm('Esta seguro que desea eliminar esta habitacion?')) {
                    axios({
                        method: 'delete',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+id,
                        responseType: 'json', 
                    }) 
                    .then(response => {  
                        this.success = response.data.success
                        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
                            .then(response => (this.habitaciones = response.data.data))
                    })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        this.info = null
                    })       
                }
            },
            crearHabitacion(id) {
                this.$router.push({ name: 'CrearHabitacion',
                    params: { id: id } 
                })
            },
            editar(id) {
                this.$router.push({ name: 'DetallesHabitaciones',
                    params: { id: id }
                })
            },
        }
    }
</script>