<script setup lang='ts'>
  
</script>
<template>
  <div>
    <div class="bg w-full bg-center absolute top-0 left-0">
    </div>
    
    <slot />
  </div>
</template>
<style>
 .bg {
  background: url('../../assets/backgrounds/HeaderBackground.png') 0 0/100% auto no-repeat;
  height: 24vh;
 }
</style>