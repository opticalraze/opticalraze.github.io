<script setup>
import { computed, ref } from 'vue';
import { useMouseInElement } from '@vueuse/core';

defineProps({
    link: String
});

const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
    const MAX_ROTATION = 6

    const rX = (
        MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2) // handles x-axis

    const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
    ).toFixed(2) // handles y-axis

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});

</script>

<template>
    <router-link 
        ref="target" 
        :to="link" 
        :style="{
            transform: cardTransform,
            transition: 'transform 0.25s ease-out'
        }" 
        class="block mb-8 text-center bg-white bg-opacity-5 border border-white border-opacity-20 rounded-xl text-white text-opacity-80 hover:text-opacity-100"
    >
        <slot />
    </router-link>
</template>
