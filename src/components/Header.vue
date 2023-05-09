<script setup>
import { ref } from 'vue';
import Logo from '../icons/Logo.vue';
import BarsIcon from '../icons/Bars.vue';
import CloseIcon from '../icons/Close.vue';
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

let smallWidth = true;
if (width.value > 520) smallWidth = false;

let mobileNav = ref(false);

</script>

<template>
    <header class="animate__animated animate__fadeIn fixed z-40 top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md">
        <div class="container max-w-6xl mx-auto">
            <nav class="py-2 mx-8 border-b border-white border-opacity-10 flex items-center justify-between">
                <div class="w-48 flex sm:hidden">
                    <button @click="mobileNav = true" aria-label="menu">
                        <BarsIcon class="w-6 h-6 text-white" />
                    </button>
                </div>
                <div class="flex items-center">
                    <router-link to="/" class="hover:opacity-50 transition-all duration-150 sm:mr-8">
                        <Logo class="w-8 h-8" />
                    </router-link>
                    <ul class="hidden sm:flex items-center">
                        <li class="mx-2"><router-link :to="{ name: 'Home' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.home") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Services' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.services") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Portfolio' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.portfolio") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Projects' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.projects") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'About' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.about") }}</router-link></li>
                    </ul>
                </div>
                <div class="w-48 text-right">
                    <router-link :to="{ name: 'Contact'}" class="border-2 border-white px-3 py-1 font-medium text-sm rounded-full text-white hover:bg-white hover:text-black transition-all duration-150 uppercase">{{ smallWidth ? $t("nav.contact") : $t("nav.getintouch") }}</router-link>
                </div>
            </nav>
        </div>
    </header>
    <nav v-if="mobileNav" class="fixed z-50 top-0 left-0 w-full h-screen bg-black bg-opacity-75 backdrop-blur-md text-center pt-24">
        <button @click="mobileNav = false" class="absolute top-3 left-8">
            <CloseIcon class="h-6 w-6" />
        </button>
        <div class="animate__animated animate__zoomIn animate__faster">
            <router-link @click="mobileNav = false" to="/" class="block text-6xl font-bold mb-2">{{ $t("nav.home") }}</router-link>
            <router-link @click="mobileNav = false" to="/services" class="block text-6xl font-bold mb-2">{{ $t("nav.services") }}</router-link>
            <router-link @click="mobileNav = false" to="/portfolio" class="block text-6xl font-bold mb-2">{{ $t("nav.portfolio") }}</router-link>
            <router-link @click="mobileNav = false" to="/projects" class="block text-6xl font-bold mb-2">{{ $t("nav.projects") }}</router-link>
            <router-link @click="mobileNav = false" to="/about" class="block text-6xl font-bold mb-2">{{ $t("nav.about") }}</router-link>
        </div>
    </nav>
</template>