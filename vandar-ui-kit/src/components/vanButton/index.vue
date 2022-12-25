<template>
  <button :class="[`btn btn-${color} btn-${type} btn-${size}`,{'loading':loading}]" :disabled="disabled || loading">
     <span :class="{'opacity-0':loading}">
      {{ label }}
     </span>
    <div v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <img class="animate-spin" src="../../assets/svg/loading.svg"/>
    </div>
  </button>
</template>

<script lang="ts" setup>
import "./style.scss";
import type { PropType } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  type: {
    default: 'fill',
    type: String as PropType<"fill" | "text" | "outline">,
    validator: (value:string) => {
      return ["fill" , "text" , "outline"].includes(value)
    }
  },
  color: {
    default:'teal',
    type: String as PropType<"teal" | "neutral" | "red" | "white">,
    validator: (value:string) => {
      return ["teal" , "neutral" , "red",  "white"].includes(value)
    }
  },
  size: {
    default:'medium',
    type: String as PropType<"large" | "medium" | "small">,
    validator: (value:string) => {
      return ["large" , "medium" , "small"].includes(value)
    }
  },
  disabled: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
});


</script>
