<template>
    <div class="py-12">
        <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div>
                       
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-8">
                                    <h1>{{this.hotel.name}}</h1>
                                    <p>Numero de habitaciones: {{this.hotel.num_rooms}}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <label for="Form-label">Tipo de habitación</label>
                                    <select v-model="habitacion.room_type_id" class="form-select" aria-label="Default select example">
                                        <option v-for="hab in tipo_habitacion" :value="hab.id" :key="hab.id">{{hab.name}}</option>
                                    </select> 
                                    <label v-if="errores.room_type_id" class="text-danger">{{errores.room_type_id}}</label>
                                </div>

                                <div class="col">
                                    <label for="Form-label">Acomodación</label>
                                    <select v-model="habitacion.accommodation_id" class="form-select" aria-label="Default select example">
                                        <option v-for="aco in tipo_acomodacion" :value="aco.id" :key="aco.id">{{aco.name}}</option>
                                    </select>   
                                    <label v-if="errores.accommodation_id" class="text-danger">{{errores.accommodation_id}}</label>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="Form-label">Cantidad</label>
                                    <input v-model="habitacion.quantity" type="text" class="form-control" placeholder="" aria-label="">
                                    <label v-if="errores.quantity" class="text-danger">{{errores.quantity}}</label>
                                </div>
                            </div>
                            <br>
                                <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
                                <div v-if="errores.simple" class="alert alert-danger" role="alert">{{errores.simple}}</div>
                            <br>
                            <div>
                                <button @click="actualizar" type="button" class="btn btn-info">Actualizar Habitación</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
        created() {
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
                .then(response => (
                    this.tipo_acomodacion = response.data
                ))
                
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
                .then(response => (
                    this.tipo_habitacion = response.data
                ))
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/show/'+this.$route.params.id)
                .then(response => (
                    this.habitacion = response.data.data
                ))
        },
        data() {
            return {
                habitacion: {
                    hotel_id: null,
                    room_type_id: null,
                    accommodation_id: null,
                    quantity: null,
                    hotel: {
                        name: null
                    }
                },
                hotel: Object,
                info: null,
                errores: {},
                tipo_acomodacion: [],
                tipo_habitacion: []
            }
        },
        methods: {
            actualizar() {
                this.errores = {}
                axios({
                    method: 'put',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id,
                    data: this.habitacion,
                    responseType: 'json', 
                }) 
                .catch(error => {
                    this.errores = error.response.data.errors
                })
                .then(response => {
                    this.info = response.data.message
                })
            }
        }
    }
</script>