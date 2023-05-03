<template>
    <section class="pt-24">
        <div class="animate__animated animate__fadeIn container max-w-5xl mx-auto px-8">
            <h1 class="text-6xl font-black text-white text-center">Services</h1>
            <div class="grid grid-cols-3 gap-8">
                <router-link to="/services/marketing" class="hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/billboard.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black text-center">Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus explicabo vel ab aliquid dolore! Neque quis harum sed fugiat, magni voluptas facere beatae? Ab a saepe id perspiciatis porro.</p>
                </router-link>
                <router-link to="/services/web-development" class="hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/code.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black text-center">Web Development</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam eum ullam deleniti porro earum provident nostrum ipsam perspiciatis explicabo ratione nisi amet officiis hic delectus et, quos possimus quas. Eaque.</p>
                </router-link>
                <router-link to="/services/branding" class="hover:opacity-75 hover:scale-105 transition-all duration-300">
                    <img src="../assets/megaphone.svg" alt="" class="aspect-square object-contain object-center p-8">
                    <h2 class="text-3xl font-black text-center">Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquam nemo. Deleniti, earum. Quod expedita impedit, corporis eius facilis iste fugiat quis placeat officia eveniet amet veniam nobis ea autem.</p>
                </router-link>
            </div>
        </div>
    </section>
</template>