<template>
  <button :class="`btn btn-${color} btn-${type} btn-${size} ${loadingState}`" :disabled="disabled || loading">
     <span :class="{'opacity-0':loading}">
      {{ label }}
     </span>
    <div v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

      <svg  class="mr-2 w-24 h-24 text-neutral-300 animate-spin dark:text-neutral-700 fill-neutral-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3.6 12C3.6 16.6392 7.36081 20.4 12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36081 16.6392 3.6 12 3.6C7.36081 3.6 3.6 7.36081 3.6 12Z" fill="url(#paint0_angular_700_2390)"/>
<defs>
<radialGradient id="paint0_angular_700_2390" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(12)">
<stop stop-color="#7A7B87"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

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
    validator: (value) => {
      return ["fill" , "text" , "outline"].includes(value)
    }
  },
  color: {
    default:'teal',
    type: String as PropType<"teal" | "neutral" | "red" | "white">,
    validator: (value) => {
      return ["teal" , "neutral" , "red",  "white"].includes(value)
    }
  },
  size: {
    default:'medium',
    type: String as PropType<"large" | "medium" | "small">,
    validator: (value) => {
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

const loadingState = computed(() => {
    return props.loading ? 'loading' : ''
})

</script>
