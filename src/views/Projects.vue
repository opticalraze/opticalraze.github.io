<script setup>
import PerspectiveCard from '../components/PerspectiveCard.vue';
import SpigotPlugins from './projects/SpigotPlugins.vue';
import WebApps from './projects/WebApps.vue';
import WebGames from './projects/WebGames.vue';

let page = "";

</script>

<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center mb-8">{{ $t("projects.projects") }}</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <PerspectiveCard @click="page = 'spigot-plugins'" link="projects">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">{{ $t("projects.spigotplugins") }}</h2>
                        <p>{{ $t("projects.checkout") + $t("projects.spigotplugins") }}</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/projects/web-apps">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">{{ $t("projects.webapps") }}</h2>
                        <p>{{ $t("projects.checkout") + $t("projects.webapps") }}</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/projects/web-games">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">{{ $t("projects.webgames") }}</h2>
                        <p>{{ $t("projects.checkout") + $t("projects.webgames") }}</p>
                    </div>
                </PerspectiveCard>
            </div>
            <Transition>
                <SpigotPlugins v-if="page == 'spigot-plugins'" />
                <WebApps v-else-if="page == 'web-apps'" />
                <WebGames v-else-if="page == 'web-games'" />
            </Transition>
        </div>
    </section>
</template>