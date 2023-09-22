<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <main class="min-h-screen">
        <router-view />
    </main>
    <a href="https://call.whatsapp.com/voice/qZ0G8SIDBVzEnZLYGJOd1F" target="_blank" class="p-4 fixed bottom-8 right-8 hover:opacity-60 transition-opacity duration-300">
        <img src="./assets/whatsapp.svg" alt="WhatsApp" class="w-12 h-12">
    </a>
    <Footer />
</template>