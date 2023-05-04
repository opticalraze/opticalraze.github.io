<script>

</script>

<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center">Projects</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <router-link to="/projects/spigot-plugins" class="text-center hover:brightness-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/bucket.svg" alt="" class="aspect-square object-contain object-center p-16 pb-0">
                    <h2 class="text-3xl font-black">Spigot Plugins</h2>
                    <p>Check out our Spigot Plugins</p>
                </router-link>
                <router-link to="/projects/web-apps" class="text-center hover:brightness-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/browser.svg" alt="" class="aspect-square object-contain object-center p-16 pb-0">
                    <h2 class="text-3xl font-black">Web Apps</h2>
                    <p>Check out our Web Apps</p>
                </router-link>
                <router-link to="/projects/web-games" class="text-center hover:brightness-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/gamepad.svg" alt="" class="aspect-square object-contain object-center p-16 pb-0">
                    <h2 class="text-3xl font-black">Web Games</h2>
                    <p>Check out our Web Games</p>
                </router-link>
            </div>
        </div>
    </section>
</template>