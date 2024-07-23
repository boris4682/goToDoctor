<script setup lang='ts'>
import dalee from '@assets/icons/dalee.png'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
    <div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px] mt-[9px]">
        <p class="text-[20px] font-semibold leading-5 text-black">1.</p>
        <div class="flex flex-col w-[258px] ml-[12px]">
          <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Пономаренко Ольга</p>
          <div class="flex justify-between mt-[8px]">
            <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">24.04.2024</p>
            <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">13:00</p>
          </div>
        </div>
        <img :src="dalee" class="ml-[15px]"/>
      </div>
</template>

