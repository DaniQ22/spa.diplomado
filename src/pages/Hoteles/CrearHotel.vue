<template>
    <div class="py-12">
        <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                  
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-10">
                                <h1>Crear nuevo hotel</h1>
                            </div>
                            <div>
                                <div class="row">
                                    <div class="col">
                                    <label for="Form-label">Nombre</label>
                                        <input v-model="hotel.name" type="text" class="form-control" placeholder="" aria-label="">
                                        <label v-if="errores.name" class="text-danger">{{errores.name}}</label>
                                    </div>
                                    <div class="col">
                                        <label for="Form-label">NIT</label>
                                        <input v-model="hotel.nit" type="text" class="form-control" placeholder="" aria-label="">
                                        <label v-if="errores.nit" class="text-danger">{{errores.nit}}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="Form-label">Dirección</label>
                                        <input v-model="hotel.address" type="text" class="form-control" placeholder="" aria-label="">
                                        <label v-if="errores.address" class="text-danger">{{errores.address}}</label>
                                    </div>
                                    <div class="col">
                                        <label for="Form-label">Numero de habitaciones</label>
                                        <input v-model="hotel.num_rooms" type="text" class="form-control" placeholder="" aria-label="">
                                        <label v-if="errores.num_rooms" class="text-danger">{{errores.num_rooms}}</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="Form-label">Ciudad</label>
                                    <select v-model="hotel.city_id" class="form-select" aria-label="Default select example">
                                        <option v-for="ciudad in ciudades" :value="ciudad.id" :key="ciudad.id">{{ciudad.name}}</option>
                                    </select>   
                                    <label v-if="errores.city_id" class="text-danger">{{errores.name}}</label>
                                </div>
                                <br>
                                    <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
                                    <div v-if="errores.simple" class="alert alert-danger" role="alert">{{errores.simple}}</div>
                                <br>
                                <div>
                                    <button @click="crearHotel" type="button" class="btn btn-info">Crear Hotel</button>
                                </div>
                                              
                            </div>
                        <br>
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
        beforeMount() {
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then(response => (
                    this.ciudades = response.data
                ))
        },
        data() {
            return {
                errores: {},
                info: null,
                ciudades: [],
                hotel: {
                    name: null,
                    nit: null,
                    address: null,
                    num_rooms: null,
                    city_id: null
                }
            }
        },
        methods: {
            crearHotel() {
                this.errores = {}
                this.info = null
                axios({
                    method: 'post',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels',
                    data: this.hotel,
                    responseType: 'json',
                })
                .then(response => {
                    this.info = response.data.message
                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                })
            }
        },
    }
</script>