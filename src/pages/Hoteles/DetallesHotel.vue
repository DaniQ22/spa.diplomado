<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1">
            </div>
            <div class="col-md-6">
                <h3>Formulario Actualizar Hotel</h3>
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
            </div>

            <div class="col">
                <label for="Form-label">Ciudad</label>
                <select v-model="hotel.city_id" class="form-select" aria-label="Default select example">
                    <option v-for="ciudad in ciudades" :value="ciudad.id" :key="ciudad.id">{{ciudad.name}}</option>
                </select>
                <label v-if="errores.city_id" class="text-danger">{{errores.city_id}}</label>
            </div>

            <br>
            <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
            <div v-if="errores.simple" class="alert alert-danger" role="alert">{{errores.simple}}</div>
            <br>
            <div>
                <button @click="actualizar" type="button" class="btn btn-info">Actualizar</button>
                <button @click="eliminar(this.$route.params.id)" type="button"
                    class="btn btn-outline-danger">Eliminar</button>
            </div>

        </div>
        <br>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    beforeMount() {
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
            .then(response => (
                this.hotel = response.data.data
            ))
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then(response => (this.ciudades = response.data))

    },
    data() {
        return {
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null,
                city: {
                    name: null
                }
            },
            errores: {},
            info: null,
            ciudades: {}
        }
    },
    methods: {
        eliminar(id) {
            this.errores = {}
            if (confirm('¿Esta seguro que desea eliminar este hotel?')) {
                axios({
                    method: 'delete',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + id,
                    responseType: 'json',
                })
                    .then(response => {
                        this.info = response.data.message
                        this.hotel = []
                    })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        this.info = null
                    })
            }
        },
        actualizar() {
            this.error = false
            this.info = false
            axios({
                method: 'put',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id,
                data: this.hotel,
                responseType: 'json',
            })
                .then(response => {
                    this.info = response.data.message
                    this.errores = {}
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.info = null
                })
        },
    }
}  
</script>