<template>
    <section class="px-8 h-screen w-full flex items-center justify-center">
        <div id="target" class="text-center sm:text-left">
            <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("about.aboutus") }}</h1>
            <h2 class="text-4xl lg:text-6xl font-black text-white">est. 2020</h2>
            <p class="text-xl text-center mt-8">{{ $t("about.tagline1") }}<br>{{ $t("about.tagline2") }}</p>
        </div>
    </section>
    <section class="px-8 h-screen w-full flex items-center justify-center">
        <div id="target" class="text-center sm:text-left">
            <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("about.ourmission") }}</h1>
            <h2 class="text-4xl lg:text-6xl font-black text-white">{{ $t("about.simplyput") }}</h2>
            <p class="text-xl text-center mt-8">{{ $t("about.tagline3") }}</p>
        </div>
    </section>
</template>