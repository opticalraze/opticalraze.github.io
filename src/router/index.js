import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Portfolio from '../views/Portfolio.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Resources from '../views/Resources.vue';
import NotFound from '../views/404.vue';

const routes = [
    {   path: '/', 
        name: 'Home', 
        component: Home,
        meta: {
            title: "Optical Raze",
            description: "We're a small software company based in Canada. We build websites, apps, games and more... Our mission is to find problems and eliminate them."
        }
    },
    {   path: '/services', 
        name: 'Services', 
        component: Services,
        meta: {
            title: "Services | Optical Raze",
            description: ""
        }
    },
    {   path: '/portfolio', 
        name: 'Portfolio', 
        component: Portfolio,
        meta: {
            title: "Portfolio | Optical Raze",
            description: ""
        } 
    },
    {   path: '/projects', 
        alias: '/projets', 
        name: 'Projects', 
        component: Projects,
        meta: {
            title: "Projects | Optical Raze",
            description: ""
        } 
    },
    {   path: '/project/:id', 
        alias: '/projet/:id', 
        name: 'Project', 
        component: Project,
        meta: {
            title: "Project | Optical Raze",
            description: ""
        } 
    },
    {   path: '/project', 
        redirect: '/projects' 
    },
    {   path: '/about', 
        name: 'About', 
        component: About,
        meta: {
            title: "About | Optical Raze",
            description: ""
        }
    },
    {   path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: "Contact | Optical Raze",
            description: ""
        }
    },
    {   path: '/resources', 
        alias:'/ressources', 
        name: 'Resources', 
        component: Resources,
        meta: {
            title: "Resources | Optical Raze",
            description: ""
        }
    },
    {   path: "/:catchAll(.*)", 
        name: "NotFound", 
        component: NotFound,
        meta: {
            title: "Page Not Found | Optical Raze",
            description: ""
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
    next();
})

export default router