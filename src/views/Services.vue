<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center">Services</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <router-link to="/services/marketing" class="text-center hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/billboard.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black">Marketing</h2>
                    <p>We can take care of your advertising using online and traditional methods.</p>
                </router-link>
                <router-link to="/services/web-development" class="text-center hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/code.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black">Web Development</h2>
                    <p>We build custom static and dynamic websites using VueJS and Laravel.</p>
                </router-link>
                <router-link to="/services/branding" class="text-center hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/megaphone.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black text-center">Branding</h2>
                    <p>We build brand images with color schemes logo designs and more.</p>
                </router-link>
            </div>
        </div>
    </section>
</template>