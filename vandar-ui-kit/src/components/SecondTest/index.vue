<template>
    <div class="what">
        <span class="text-ltitle-1 bg-teal-600">{{ hiii }}</span>
        <p class="mb-8">second</p>
        <p>component</p>
    </div>
</template>

<script setup lang="ts">
import './style.scss';
const hiii = ref<string>('hiiii')
</script>
