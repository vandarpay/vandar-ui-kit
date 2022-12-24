<template>
  <button :class="`btn btn-${color} btn-${type}`">{{ label }}</button>
</template>

<script lang="ts" setup>
import "./style.scss";
import type { PropType } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["text", "outline"].includes(value);
    },
  },
  color: {
    type: String as PropType<"teal" | "neutral" | "red" | "white">,

  },
});
</script>
