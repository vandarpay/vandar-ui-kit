<template>
  <button :class="`btn btn-${color} btn-${type}`">{{ label }}</button>
</template>

<script lang="ts" setup>
import "./style.scss";

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
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["teal", "neutral", "red", "white"].includes(value);
    },
  },
});
</script>
