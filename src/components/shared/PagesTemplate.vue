<script setup lang='ts'>
import FooterPanel from '@//components/FooterPanel/FooterPanel.vue';
  
</script>
<template>
  <div>
    <div class="bg w-full bg-center absolute top-0 left-0">
    </div>
    <slot />
    <FooterPanel class="mt-[40px]"/>
  </div>
</template>
<style>
.bg {
  background: url('../../assets/backgrounds/HeaderBackground.png') 0 0/100% auto no-repeat;
  height: 24vh;
 }
</style>