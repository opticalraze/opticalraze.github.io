<script setup>
import ServicesCard from '../components/ServicesCard.vue';
</script>
<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center mb-8">Services</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <ServicesCard link="/services/marketing">
                    <img src="../assets/billboard.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <div class="p-8 pt-0">
                        <h2 class="text-3xl font-black">Marketing</h2>
                        <p>We can take care of your advertising using online and traditional methods.</p>
                    </div>
                </ServicesCard>
                <ServicesCard link="/services/web-development">
                    <img src="../assets/code.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <div class="p-8 pt-0">
                        <h2 class="text-3xl font-black">Web Development</h2>
                        <p>We build custom static and dynamic websites using VueJS and Laravel.</p>
                    </div>
                </ServicesCard>
                <ServicesCard link="/services/branding">
                    <img src="../assets/megaphone.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <div class="p-8 pt-0">
                        <h2 class="text-3xl font-black">Branding</h2>
                        <p>We build brand images with color schemes logo designs and more.</p>
                    </div>
                </ServicesCard>
            </div>
        </div>
    </section>
</template>