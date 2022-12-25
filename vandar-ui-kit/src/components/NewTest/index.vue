<template>
    <div class="test">
        <span class="text-ltitle-1 bg-teal-600">{{ salam }}</span>
        <p class="mb-8">first</p>
        <p>component</p>
    </div>
</template>

<script setup lang="ts">
import './style.scss';
const salam = ref<string>('salammm')
</script>
