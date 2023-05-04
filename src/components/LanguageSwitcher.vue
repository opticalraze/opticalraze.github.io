<script setup>
import { onMounted, ref } from 'vue';
const language = ref(null);

onMounted(() => {
    language.value.addEventListener('change', () => {
        localStorage.setItem('lang', language.value.value)
        document.querySelector('html').lang = language.value.value;
    })
})


</script>

<template>
    <select ref="language" v-model="$i18n.locale" class="bg-black my-4">
        <option value="en" :selected="$i18n.locale">English</option>
        <option value="fr" :selected="$i18n.locale">Français</option>
    </select>
</template>