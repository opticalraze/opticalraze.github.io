import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Portfolio from '../views/Portfolio.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/404.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/services', name: 'Services', component: Services },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/projects', alias: '/projets', name: 'Projects', component: Projects },
    { path: '/project/:id', alias: '/projet/:id', name: 'Project', component: Project },
    { path: '/project', redirect: '/projects' },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/resources', alias:'/ressources', name: 'Resources', component: Contact },
    { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router