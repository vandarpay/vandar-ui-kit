<template>
  <div>
    <newTest></newTest>
    <baseBtn color="teal" label="متن دکمه"></baseBtn>
    <div class="pt-12"></div>
    <baseBtn color="teal" label="متن دکمه" type="outline-teal"></baseBtn>
    <div class="pt-12"></div>

    <baseBtn color="teal" label="متن دکمه" type="text-teal"></baseBtn>
  </div>
</template>

<script setup>
import newTest from './components/NewTest/index.vue'
import baseBtn from './components/BaseBtn/index.vue'

</script>
