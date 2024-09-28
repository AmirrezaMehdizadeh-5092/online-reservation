import { createRouter , createWebHistory } from "vue-router";

import Home from '../components/HomeComp.vue'
import Reservation from '../components/ReservationComp.vue'
const routes = 
[
    {
        path : '/',
        component : Home 
    },
    {
        path : '/reservation',
        component : Reservation
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router