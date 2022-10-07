
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'

import InicioPages from '@/pages/InicioPages.vue'
import HotelesPages from '@/pages/HotelesPages.vue'
import HabitacionesPages from '@/pages/HabitacionesPages.vue'
import CrearHotel from '@/pages/Hoteles/CrearHotel.vue'
import DetallesHotel from '@/pages//Hoteles/DetallesHotel.vue'
import TipoHabitaciones from '@/pages/TipoHabitaciones.vue'
import PaginaAcomodaciones from '@/pages/PaginaAcomodaciones.vue'
import DetallesHabitaciones from '@/pages/Habitaciones/DetallesHabitaciones.vue'
import CrearHabitacion from '@/pages/Habitaciones/CrearHabitacion.vue'






const router = createRouter ({
    history: createWebHistory (),
    routes: [
        {path: '/', name: 'IncioPages', component: InicioPages},
        {path: '/hotels', name: 'HotelesPages', component: HotelesPages},
        {path: '/rooms', name: 'HabitacionesPages', component: HabitacionesPages},
        {path: '/crearhotel', name: 'CrearHotel', component: CrearHotel},
        {path: '/detallehotel', name: 'DetallesHotel', component: DetallesHotel},
        {path: '/tipohabi', name: 'TipoHabitaciones', component: TipoHabitaciones},
        {path: '/pagacom', name: 'PaginaAcomodaciones', component: PaginaAcomodaciones},
        {path: '/detallehabitacion', name: 'DetallesHabitaciones', component: DetallesHabitaciones},
        {path: '/crearhabitacion', name: 'CrearHabitacion', component: CrearHabitacion},





    ] 
})


createApp(App)
.use(router)
.mount('#app')
