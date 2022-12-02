import { createRouter,createWebHistory } from "vue-router";


const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/areas',
        name: 'areas',
        component: () => import('../views/AreaListView.vue')
    },
    {
        path: '/areas/nuevo',
        name: 'areasNuevo',
        component: () => import('../views/AreaView.vue')
    },
    {
        path: '/areas/modificar/:id',
        name: 'areasModificar',
        component: () => import('../views/AreaEdicionView.vue')
    },

    {
        path: '/activos',
        name: 'activos',
        component: () => import('../views/ActivoListView.vue')
    },
    {
        path: '/activos/nuevo',
        name: 'activosNuevo',
        component: () => import('../views/ActivoView.vue'),
        
    },
    {
        path: '/activos/modificar/:id',
        name: 'activosModificar',
        component: () => import('../views/ActivoEdicionView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;