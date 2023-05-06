<script setup>
import PerspectiveCard from '../components/PerspectiveCard.vue';
</script>
<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center mb-8">Services</h1>
            <div class="lg:grid grid-cols-3 gap-8">
                <PerspectiveCard link="/services/marketing">
                    <div class="p-8">
                        <h2 class="text-2xl font-black mb-4">Marketing</h2>
                        <p class="text-sm">We can take care of your advertising using online and traditional methods.</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/services/web-development">
                    <div class="p-8">
                        <h2 class="text-2xl font-black mb-4">Web Development</h2>
                        <p class="text-sm">We build custom static and dynamic websites using VueJS and Laravel.</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/services/branding">
                    <div class="p-8">
                        <h2 class="text-2xl font-black mb-4">Branding</h2>
                        <p class="text-sm">We build brand images with color schemes logo designs and more.</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/services/branding">
                    <div class="p-8">
                        <h2 class="text-2xl font-black mb-4">SEO</h2>
                        <p class="text-sm">We will use tools to increase your search engine ranking.</p>
                    </div>
                </PerspectiveCard>
                <PerspectiveCard link="/services/branding">
                    <div class="p-8">
                        <h2 class="text-2xl font-black mb-4">App Development</h2>
                        <p class="text-sm">We can create apps for computers and mobile devices</p>
                    </div>
                </PerspectiveCard>
            </div>
        </div>
    </section>
</template>