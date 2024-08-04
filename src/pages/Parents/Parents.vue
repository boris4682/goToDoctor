<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/par1.png'
import photo2 from '@assets/par2.png'
import photo3 from '@assets/par3.png'
import photo4 from '@assets/par4.png'
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
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Социальные истории</p>
            </div>
            <div class="flex flex-col gap-[15px] mt-[30px]">
                <img :src="photo1"/>
                <img :src="photo2"/>
                <img :src="photo3"/>
                <img :src="photo4"/>
            </div>
        </div>
      </div>
    </PagesTemplate>
</template>

