<script setup lang='ts'>
import magnifier from '@assets/icons/Magnifier.svg'




</script>
<template>
  <div class="flex items-center justify-center border border-[#CDCDCD] w-full h-[49px] rounded-[15px] bg-white">
    <input class="w-full pl-2 ml-2 h-[40px]"/>
    <img :src="magnifier" class="w-[35px] h-[35px] mr-2 cursor-pointer"/>
  </div>
</template>
