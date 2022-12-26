<template>
  <button :class="[`van-btn van-btn-${color} van-btn-${type} van-btn-${size} flex items-center justify-center`,{'loading':loading}]" :disabled="disabled || loading">
    <i v-if="beforeIcon?.length" :class="`ri-${beforeIcon}-${iconType} van-icon ml-8`"></i>
     <span :class="{'opacity-0':loading}">
      {{ label }}
     </span>
     <i v-if="afterIcon?.length" :class="`ri-${afterIcon}-${iconType} van-icon mr-8`"></i>
    <div v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <img class="animate-spin" src="../../assets/svg/loading.svg"/>
    </div>
  </button>
</template>
<script lang="ts" setup>
import "./style.scss";
import type { PropType } from "vue";

const props = defineProps({
  label: { type: String,},
  type: {
    default: 'fill',
    type: String as PropType<"fill" | "ghost" | "outlined">,
    validator: (value:string) => {
      return ["fill" , "ghost" , "outlined"].includes(value)
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
  iconType:{
    default:'line',
    type: String as PropType<"line" | "fill">,
    validator: (value:string) => {
      return ["line" , "fill"].includes(value)
    }
  },
  beforeIcon: {
    type: String,
  },
  afterIcon: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
});


</script>
