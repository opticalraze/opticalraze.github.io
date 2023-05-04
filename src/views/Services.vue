<script setup>
import ServicesCard from '../components/ServicesCard.vue';
</script>
<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center mb-8">Services</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <ServicesCard link="/services/marketing" image="billboard" header="Marketing" description="We can take care of your advertising using online and traditional methods." />
                <ServicesCard link="/services/web-development" image="code" header="Web Development" description="We build custom static and dynamic websites using VueJS and Laravel." />
                <ServicesCard link="/services/branding" image="megaphone" header="Branding" description="We build brand images with color schemes logo designs and more." />
            </div>
        </div>
    </section>
</template>