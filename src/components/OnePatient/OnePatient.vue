<script setup lang='ts'>
import dalee from '@assets/icons/dalee.png'
import avatar from '@assets/icons/userpic.png'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
    <div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px] mt-[9px]">
        <img :src="avatar"/>
        <div class="flex flex-col w-[258px] ml-[12px]">
          <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Пономаренко Ольга</p>
          <div class="flex justify-between mt-[8px]">
            <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">+7-902-643-43-98</p>
          </div>
        </div>
        <img :src="dalee" class="ml-[15px]"/>
      </div>
</template>

