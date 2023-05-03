import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Services from '../views/About.vue';
import Portfolio from '../views/About.vue';
import Projects from '../views/About.vue';
import About from '../views/About.vue';
import Contact from '../views/About.vue';
import NotFound from '../views/404.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/services', name: 'Services', component: Services },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router