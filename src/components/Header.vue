<script>

export default {
    data() {
        return {
            mobileNav: false
        }
    }
}

</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md">
        <div class="container max-w-6xl mx-auto">
            <nav class="py-2 mx-8 border-b border-white border-opacity-10 flex items-center justify-between">
                <div class="w-32 sm:hidden">
                    <button @click="mobileNav = true"><img src="../assets/bars.svg" class="w-6 h-6"></button>
                </div>
                <div class="flex items-center">
                    <router-link to="/" class="hover:opacity-50 transition-all duration-150 sm:mr-8"><img src="../assets/logo.svg" class="h-8 w-8"></router-link>
                    <ul class="hidden sm:flex items-center">
                        <li class="mx-2"><router-link :to="{ name: 'Home' }" class="text-sm hover:opacity-50 transition-all duration-150">Home</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Services' }" class="text-sm hover:opacity-50 transition-all duration-150">Services</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Portfolio' }" class="text-sm hover:opacity-50 transition-all duration-150">Portfolio</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Projects' }" class="text-sm hover:opacity-50 transition-all duration-150">Projects</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'About' }" class="text-sm hover:opacity-50 transition-all duration-150">About</router-link></li>
                    </ul>
                </div>
                <router-link :to="{ name: 'Contact'}" class="border-2 border-white px-3 py-1 font-medium text-sm rounded-full text-white hover:bg-white hover:text-black transition-all duration-150">GET IN TOUCH</router-link>
            </nav>
        </div>
        <nav v-if="mobileNav" class="hidden fixed z-50 top-0 left-0 w-full h-screen bg-black bg-opacity-75 backdrop-blur-md text-center pt-24">
            <button @click="mobileNav = false" class="absolute top-4 left-4"><img src="../assets/close.svg" class="h-6 w-6"></button>
            <router-link to="/" class="block text-6xl font-bold mb-2">Home</router-link>
            <router-link to="/" class="block text-6xl font-bold mb-2">Services</router-link>
            <router-link to="/" class="block text-6xl font-bold mb-2">Portfolio</router-link>
            <router-link to="/" class="block text-6xl font-bold mb-2">Projects</router-link>
            <router-link to="/" class="block text-6xl font-bold mb-2">About</router-link>
        </nav>
    </header>
</template>