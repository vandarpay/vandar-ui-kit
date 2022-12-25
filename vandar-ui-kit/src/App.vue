<template>
  <div class="p-12 dark:bg-neutral-900">
    <newTest></newTest> 
    <vanButton size="large" :loading="true" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" type="outline" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="ghost" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="outline" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="outline" size="small" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="ghost" color="red" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="large" color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton color="neutral" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="neutral"  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="neutral" type="ghost" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="ghost" color="neutral"  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
<div class="bg-neutral-900 p-24">
  <vanButton size="large" color="white" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton color="white"  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton size="small" color="white"  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="outline" color="white"  label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton type="ghost" color="white"  label="متن دکمه"></vanButton>
</div>
  </div>
</template>

<script setup>
import newTest from './components/NewTest/index.vue'
import vanButton from './components/vanButton/index.vue'

</script>
