<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/icons/trace 1.svg'
import photo2 from '@assets/icons/Trace2.svg'

import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer" @click="router.back()"/>
      </div>
      
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex flex-col gap-[22px] translate-y-[-10px]">
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Приём</p>
            </div>
            <RouterLink to="/whowillgo"><div class="w-full flex justify-center items-center gap-[40px] mt-[24px]">
                <img :src="photo1"/>
                <p class=" font-semibold text-[20px] leading-[24px] text-[#016368]">Первичный<br>приём</p>
            </div></RouterLink>
            <RouterLink to="/whowillgo"><div class="w-full flex justify-center items-center gap-[40px] mt-[49px]">
                <img :src="photo2"/>
                <p class=" font-semibold text-[20px] leading-[24px] text-[#016368]">Повторный<br>приём</p>
            </div></RouterLink>
        </div>
      </div>
    </PagesTemplate>
      
</template>

