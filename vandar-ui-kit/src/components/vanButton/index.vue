<template>
  <button :class="`btn btn-${color} btn-${type}`">{{ label }}</button>
</template>

<script lang="ts" setup>
import "./style.scss";
import type { PropType } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type: {
    type: String as PropType<"text" | "outline">,
  },
  color: {
    type: String as PropType<"teal" | "neutral" | "red" | "white">,
  },
});
</script>
