<template>
    <div class="py-12">
        <div class="max-w-7*1 mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-10">
                                    <h1>Acomodaciones</h1>
                                </div>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="aco in tipo_acomodacion" :key="aco.id">
                                    <th  scope="row"> {{aco.id}} </th>
                                    <td> {{aco.name}} </td>
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
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
                .then(response => (
                    this.tipo_acomodacion = response.data
                ))
        },
        data() {
            return {
                tipo_acomodacion: []
            }
        }
    }
</script>