<script setup>
import Plaque from '../components/Plaque.vue';
</script>

<template>
    <section class="px-8 h-screen w-full flex items-center justify-center">
        <div class="animate__animated animate__fadeIn text-center sm:text-left">
            <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("about.aboutus") }}</h1>
            <h2 class="text-4xl lg:text-6xl font-black text-white">est. 2020</h2>
            <p class="text-xl text-center mt-8">{{ $t("about.tagline1") }}<br>{{ $t("about.tagline2") }}</p>
        </div>
    </section>
    <section class="px-8 h-screen w-full flex items-center justify-center">
        <div class="text-center sm:text-left">
            <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("about.ourmission") }}</h1>
            <h2 class="text-4xl lg:text-6xl font-black text-white">{{ $t("about.simplyput") }}</h2>
            <p class="text-xl text-center mt-8">{{ $t("about.tagline3") }}</p>
        </div>
    </section>
    <section class="px-8 h-screen w-full flex items-center justify-center">
        <div class="text-center sm:text-left">
            <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("about.mark") }}</h1>
            <h2 class="text-4xl lg:text-6xl font-black text-white">{{ $t("about.proud") }}</h2>
            <p class="text-xl text-center my-8">{{ $t("about.plaque") }}</p>

            <Plaque class="mx-auto" />

        </div>
    </section>
    <section>
        <h4 class="text-3xl font-black text-center mb-4 mt-16">{{ $t("about.social") }}</h4>
        <div class="flex gap-8 justify-center max-w-2xl mx-auto mb-16 px-8">
            <a href="https://www.instagram.com/opticalraze/" target="_blank" title="Instagram" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/instagram.svg" alt="Instagram" class="h-12 w-12">
            </a>
            <a href="https://twitter.com/opticalraze" target="_blank" title="Twitter" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/twitter.svg" alt="Twitter" class="h-12 w-12">
            </a>
            <a href="https://www.facebook.com/opticalraze/" target="_blank" title="Facebook" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/facebook.svg" alt="Facebook" class="h-12 w-12">
            </a>
            <a href="https://www.youtube.com/@opticalraze" target="_blank" title="YouTube" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/youtube.svg" alt="YouTube" class="h-12 w-12">
            </a>
            <a href="https://www.tiktok.com/@opticalraze" target="_blank" title="TikTok" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/tiktok.svg" alt="TikTok" class="h-12 w-12">
            </a>
            <a href="https://www.reddit.com/r/opticalraze/" target="_blank" title="Reddit" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/reddit.svg" alt="Reddit" class="h-12 w-12">
            </a>
            <a href="https://discord.gg/hpvbpuN3As" target="_blank" title="Discord" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/discord.svg" alt="Discord" class="h-12 w-12">
            </a>
            <a href="https://dribbble.com/opticalraze" target="_blank" title="Dribbble" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/dribbble.svg" alt="Dribbble" class="h-12 w-12">
            </a>
            <a href="https://opticalraze.itch.io" target="_blank" title="Itch.io" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/itch-io.svg" alt="Itch.io" class="h-12 w-12">
            </a>
            <a href="https://www.snapchat.com/add/opticalraze" target="_blank" title="Snapchat" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/snapchat.svg" alt="Snapchat" class="h-12 w-12">
            </a>
            <a href="https://www.linkedin.com/company/opticalraze" target="_blank" title="LinkedIn" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/linkedin.svg" alt="LinkedIn" class="h-12 w-12">
            </a>
            <a href="https://github.com/opticalraze" target="_blank" title="GitHub" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/github.svg" alt="GitHub" class="h-12 w-12">
            </a>
        </div>
    </section>
</template>