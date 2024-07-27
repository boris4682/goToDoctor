<script setup lang='ts'>
import magnifier from '@assets/icons/Magnifier.svg'




</script>
<template>
  <div class="flex items-center justify-center border border-[#CDCDCD] w-full h-[49px] rounded-[15px] bg-white">
    <img :src="magnifier" class="w-[35px] h-[35px] ml-2 cursor-pointer"/>
    <input class="w-full pl-2 mr-2 h-[40px]" placeholder="Наименование"/>
  </div>
</template>
