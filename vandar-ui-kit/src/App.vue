<template>
  <div class="p-12 dark:bg-neutral-900">
    <div>
      <i class="ri-admin-line"></i>
    </div>

    <vanButton size="large" :loading="true" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton :after-icon="'arrow-left'" :isIcon="true" size="small"></vanButton>
    <div class="pt-12"></div>
    <vanButton :before-icon="'arrow-left'" :isIcon="true" type="outlined"></vanButton>
    <div class="pt-12"></div>
    <vanButton :after-icon="'arrow-left'" :isIcon="true" size="large" type="inlined"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" type="outlined" width="500px" label="ddddمتن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="inlined" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" color="red" label="متن دکمه" :before-icon="'arrow-right'"  :after-icon="'arrow-left'"></vanButton>
    <div class="pt-12"></div>
    <vanButton color="red" label="متن دکمه" :before-icon="'arrow-right'"  :after-icon="'arrow-left'"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="red" label="متن دکمه" :before-icon="'arrow-right'"  :after-icon="'arrow-left'"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="outlined" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="outlined" size="small" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="inlined" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" color="neutral" type="outlined" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="neutral" type="inlined" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="inlined" color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <div class="bg-neutral-900 p-24">
      <vanButton size="large" color="white" label="متن دکمه"></vanButton>
      <div class="pt-12"></div>
      <vanButton color="white" label="متن دکمه"></vanButton>
      <div class="pt-12"></div>
      <vanButton size="small" color="white" label="متن دکمه"></vanButton>
      <div class="pt-12"></div>
      <vanButton type="outlined" color="white" label="متن دکمه"></vanButton>
      <div class="pt-12"></div>
      <vanButton type="inlined" color="white" label="متن دکمه"></vanButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import vanButton from './components/Button/index.vue'

</script>
