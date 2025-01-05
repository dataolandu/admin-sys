<template>
    <div>{{ login }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref('login')
</script>

<style scoped>
div {
    color: blue;
}
</style>