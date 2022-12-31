<template>
  <button :class="[`van-btn van-btn-${color} van-btn-${type} van-btn-${size} ${isFull ? `w-full` : ''} `,
  {'loading':loading, 'isIcon':isIcon}]" :disabled="disabled || loading">
    <i v-if="beforeIcon?.length && !loading" :class="`ri-${beforeIcon}-${iconType} van-icon`"></i>
     <span v-if="label && !isIcon" :class="{'opacity-0':loading}">
      {{ label }}
     </span>
     <i v-if="afterIcon?.length && !loading" :class="`ri-${afterIcon}-${iconType} van-icon`"></i>
    <div v-if="loading" class="loading">
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
    default: 'filled',
    type: String as PropType<"filled" | "inlined" | "outlined">,
    validator: (value:string) => {
      return ["filled" , "inlined" , "outlined"].includes(value)
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
  isFull: {
    type: Boolean
  },
  iconType:{
    default:'line',
    type: String as PropType<"line" | "fill">,
    validator: (value:string) => {
      return ["line" , "fill"].includes(value)
    }
  },
  isIcon: {
    type: Boolean
  },
  beforeIcon: {
    type:  String,
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
