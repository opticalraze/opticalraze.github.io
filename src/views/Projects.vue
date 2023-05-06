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
            <h1 class="text-6xl font-black text-white text-center mb-8">Projects</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <PerspectiveCard @click="page = 'spigot-plugins'" link="projects">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">Spigot Plugins</h2>
                        <p>Check out our Spigot Plugins</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/projects/web-apps">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">Web Apps</h2>
                        <p>Check out our Web Apps</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/projects/web-games">
                    <div class="p-8">
                        <h2 class="text-3xl font-black">Web Games</h2>
                        <p>Check out our Web Games</p>
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