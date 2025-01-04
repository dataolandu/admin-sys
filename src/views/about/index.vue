<template>
    <div>{{ about }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const about = ref('about')
</script>

<style scoped>
div {
    color: blue;
}
</style>