<template>
    <div class="py-12">
            <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-1">
                                </div>
                                <div class="col-md-9">
                                  <h1>Hoteles</h1>
                              </div>
                                <div class="col-md-2">
                                    <button @click="nuevoHotel"  class="btn btn-info md:justify-items-end">Agregar hotel</button>
                                </div>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">NIT</th>
                                <th scope="col">NOMBRES</th>
                                <th scope="col">DIRECCION</th>
                                <th scope="col">CIUDAD</th>
                                <th scope="col">CAPACIDAD HABITACIONES</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="hotel in hoteles" :key="hotel.id">
                                    <td scope="row"> {{hotel.nit}} </td>
                                    <td> {{hotel.name}} </td>
                                    <td> {{hotel.address}} </td>
                                    <td> {{hotel.city.name}} </td>
                                    <td> {{hotel.num_rooms}} </td>
                                    <td><button type="button" @click="detalles(hotel.id)" class="btn btn-secondary">Detalle</button></td>
                                    <td><button type="button" @click="habitaciones(hotel.id)" class="btn btn-info">Habitaciones</button></td>
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
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
            .then(response => (
                this.hoteles = response.data.data
            ))
    },
    data() {
        return {
            hoteles: []
        }
    },
    methods: {
        detalles(id) {
            this.$router.push({name: 'DetallesHotel',
                params: { id: id }
            })
        },
        habitaciones(id) {
        this.$router.push({name: 'HabitacionesPages',
            params: { id: id }
            })
        },
        nuevoHotel() {
            this.$router.push({ name: 'CrearHotel'})
        }
    }
}
</script>