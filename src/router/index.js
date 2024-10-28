import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactUs from "@/components/ContactUs.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }, 
        {
            path: '/about-us',
            name: 'about',
            component: AboutView
        }, 
        {
            path: '/contact-us',
            name: 'contactUs',
            component: ContactUs
        }
    ]
})

export default router