<script setup lang='ts'>
import MainTemplate from '@//components/shared/MainTemplate.vue';
import img from '@assets/secondSlide.png'
</script>
<template>
  <MainTemplate>
    <div class="px-4">
      <img :src="img" class="w-[225px] h-[248px] mx-auto"/>
    </div>
  </MainTemplate>
</template>
<style lang='scss'></style>