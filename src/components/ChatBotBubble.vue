<script setup>
defineProps({
    user: Boolean,
    message: String
});
</script>
<template>
    <p class="border rounded-lg m-2 px-2 py-1 text-sm" :class="user ? 'bg-black border-white text-white' : 'bg-white text-black'">{{ message }}</p>
</template>