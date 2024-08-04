<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/icons/couple_6548821 (1) 1.svg'
import photo2 from '@assets/icons/children_3884934 1.svg'

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
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Кто пойдет на приём?</p>
            </div>
            <RouterLink to="/parents"><div class="w-full flex justify-center items-center gap-[40px] mt-[24px]">
                <img :src="photo1"/>
                <div class="flex flex-col">
                    <p class=" font-semibold text-[24px] leading-[29px] text-[#016368]">Родитель</p>
                    <p class=" font-medium text-[15px] leading-[18px] text-[#979797]">Пойдет взрослый на приём</p>
                </div>
            </div></RouterLink>
            <RouterLink to="/children"><div class="w-full flex justify-center items-center gap-[40px] mt-[49px]">
                <div class="flex flex-col">
                    <p class=" font-semibold text-[24px] leading-[29px] text-[#016368]">Ребенок</p>
                    <p class=" font-medium text-[15px] leading-[18px] text-[#979797]">Пойдет ребенок на приём</p>
                </div>
                <img :src="photo2"/>
            </div></RouterLink>
        </div>
      </div>
    </PagesTemplate>
      
</template>

