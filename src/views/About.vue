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
    <section>
        <div class="flex gap-8 justify-center max-w-2xl mx-auto my-16 px-8">
            <a href="https://www.instagram.com/opticalraze/" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/instagram.svg" alt="Instagram" class="h-12 w-12">
            </a>
            <a href="https://twitter.com/opticalraze" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/twitter.svg" alt="Twitter" class="h-12 w-12">
            </a>
            <a href="https://www.facebook.com/opticalraze/" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/facebook.svg" alt="Facebook" class="h-12 w-12">
            </a>
            <a href="https://www.youtube.com/@opticalraze" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/youtube.svg" alt="YouTube" class="h-12 w-12">
            </a>
            <a href="https://www.tiktok.com/@opticalraze" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/tiktok.svg" alt="TikTok" class="h-12 w-12">
            </a>
            <a href="https://www.reddit.com/r/opticalraze/" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/reddit.svg" alt="Reddit" class="h-12 w-12">
            </a>
            <a href="https://discord.gg/hpvbpuN3As" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/discord.svg" alt="Discord" class="h-12 w-12">
            </a>
            <a href="https://dribbble.com/opticalraze" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/dribbble.svg" alt="Dribbble" class="h-12 w-12">
            </a>
            <a href="https://github.com/opticalraze" target="_blank" class="hover:brightness-50 transition-all duration-300">
                <img src="../assets/github.svg" alt="GitHub" class="h-12 w-12">
            </a>
        </div>
    </section>
</template>