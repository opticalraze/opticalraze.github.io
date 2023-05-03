<template>
    <footer>
        <div class="container max-w-6xl mx-auto lg:flex items-center justify-between p-8 text-center">
            <p class="pb-4 lg:pb-0">© Copyright {{ new Date().getFullYear() }}, Optical Raze Inc.</p>
            <nav>
                <router-link to="/" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Home</router-link>
                <router-link to="/resources" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Resources</router-link>
                <router-link to="/services" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Services</router-link>
                <router-link to="/portfolio" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Portfolio</router-link>
                <router-link to="/projects" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Projects</router-link>
                <router-link to="/about" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">About</router-link>
                <router-link to="/contact" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">Contact</router-link>
            </nav>
            <select ref="language" class="bg-black my-4">
                <option value="en" selected>English</option>
                <option value="fr">French</option>
            </select>
        </div>
    </footer>
</template>