<template>
  <button :class="`btn btn-${color} btn-${type}`">{{ label }}</button>
</template>

<script lang="ts" setup>
import "./style.scss";

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: false },
  color: { type: String, required: false },
});
</script>
