<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<template>
    <footer>
        <div class="container max-w-6xl mx-auto lg:flex items-center justify-between p-8 text-center">
            <p class="pb-4 lg:pb-0">© Copyright {{ new Date().getFullYear() }}, Optical Raze Inc.</p>
            <nav>
                <router-link to="/" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.home") }}</router-link>
                <router-link to="/resources" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.resources") }}</router-link>
                <router-link to="/services" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.services") }}</router-link>
                <router-link to="/portfolio" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.portfolio") }}</router-link>
                <router-link to="/projects" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.projects") }}</router-link>
                <router-link to="/about" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.about") }}</router-link>
                <router-link to="/contact" class="mr-2 text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.contact") }}</router-link>
            </nav>
            <LanguageSwitcher />
        </div>
    </footer>
</template>