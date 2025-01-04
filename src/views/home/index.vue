<template>
    <div>{{ home }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const home = ref('home')
</script>

<style scoped>
div {
    color: blue;
}
</style>