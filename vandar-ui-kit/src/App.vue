<template>
  <div>
    <newTest></newTest>
    <vanButton class="btn btn-teal btn-larg" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton class="btn btn-teal" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton class="btn btn-teal btn-small" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>
    <vanButton class="btn btn-teal btn-outline" label="متن دکمه"></vanButton>
    <div class="pt-12"></div>

    <vanButton class="btn btn-teal btn-text" label="متن دکمه"></vanButton>
  </div>
</template>

<script setup>
import newTest from './components/NewTest/index.vue'
import vanButton from './components/vanButton/index.vue'

</script>
