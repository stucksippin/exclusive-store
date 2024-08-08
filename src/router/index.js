import { createRouter, createWebHistory } from "vue-router"
import ContactPage from '../pages/ContactPage.vue'
import HomePage from '../pages/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/contact',
            name: "Contact",
            component: ContactPage
        },
        {
            path: '/',
            name: "HomePage",
            component: HomePage
        },
        {
            path: '/product/:id',
            name: "ProductPage",
            component: ProductPage
        },
    ]
})

export default router