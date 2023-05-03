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
                <div class="w-32 flex sm:hidden">
                    <button @click="mobileNav = true"><img src="../assets/bars.svg" class="w-6 h-6"></button>
                </div>
                <div class="flex items-center">
                    <router-link to="/" class="hover:opacity-50 transition-all duration-150 sm:mr-8"><img src="../assets/logo.svg" class="h-8 w-8"></router-link>
                    <ul class="hidden sm:flex items-center">
                        <li class="mx-2"><router-link :to="{ name: 'Home' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.home") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Services' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.services") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Portfolio' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.portfolio") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'Projects' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.projects") }}</router-link></li>
                        <li class="mx-2"><router-link :to="{ name: 'About' }" class="text-sm hover:opacity-50 transition-all duration-150">{{ $t("nav.about") }}</router-link></li>
                    </ul>
                </div>
                <div class="w-32 text-right">
                    <router-link :to="{ name: 'Contact'}" class="border-2 border-white px-3 py-1 font-medium text-sm rounded-full text-white hover:bg-white hover:text-black transition-all duration-150">{{ $t("nav.getintouch") }}</router-link>
                </div>
            </nav>
        </div>
        <nav v-if="mobileNav" class="fixed z-50 top-0 left-0 w-full h-screen bg-black bg-opacity-75 backdrop-blur-md text-center pt-24">
            <button @click="mobileNav = false" class="absolute top-3 left-8"><img src="../assets/close.svg" class="h-6 w-6"></button>
            <router-link @click="mobileNav = false" to="/" class="block text-6xl font-bold mb-2">{{ $t("nav.home") }}</router-link>
            <router-link @click="mobileNav = false" to="/services" class="block text-6xl font-bold mb-2">{{ $t("nav.services") }}</router-link>
            <router-link @click="mobileNav = false" to="/portfolio" class="block text-6xl font-bold mb-2">{{ $t("nav.portfolio") }}</router-link>
            <router-link @click="mobileNav = false" to="/projects" class="block text-6xl font-bold mb-2">{{ $t("nav.projects") }}</router-link>
            <router-link @click="mobileNav = false" to="/about" class="block text-6xl font-bold mb-2">{{ $t("nav.about") }}</router-link>
        </nav>
    </header>
</template>