<script setup lang='ts'>
import img from '@assets/Avatar.png'
import fon from '@assets/Fon.png'
import back from '@assets/icons/back.png'
import setting from '@assets/icons/setting.png'
import { useRouter } from 'vue-router';
import PagesTemplate from '@//components/shared/PagesTemplate.vue';

const router = useRouter()
</script>

<template>
  <PagesTemplate>
    <div class="h-[15vh]">
      <img :src="fon" class="mt-[43px] mx-auto" />

    </div>
    <div class="flex">
      <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-110px] translate-x-[-15px] cursor-pointer"
        @click="router.back()" />
      <img :src="img" class=" mx-auto translate-y-[-60px] translate-x-[15px]" />
      <img :src="setting" class=" mx-auto w-[43px] h-[40px] translate-y-[-90px] translate-x-[15px] cursor-pointer" />
    </div>

    <div class="flex justify-center">
      <div class=" pt-[20px] w-[354px] pb-[20px]">
        <p class=" font-medium text-sm leading-4 text-[#A4A5A5]">Сменить пароль</p>
        <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" type="password"
          placeholder="___ ___ ____ ____">
        <p class=" font-medium text-sm leading-4 text-[#A4A5A5] mt-[18px]">Изменить номер телефона</p>
        <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" type="number"
          placeholder="+ 7 (903) - 465 - 37 - 26">
        <div class="w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center mt-[27px]">
          <p class="text-[20px] leading-[24px] font-bold text-white cursor-pointer">Продолжить</p>
        </div>
      </div>
    </div>
  </PagesTemplate>

</template>
