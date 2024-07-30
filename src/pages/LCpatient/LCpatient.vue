<script setup lang='ts'>
import img from '@assets/Patient.png'
import fon from '@assets/Fon.png'

import back from '@assets/icons/back.png'
import setting from '@assets/icons/setting.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
        <img :src="fon" class="mt-[43px] mx-auto"/>
        
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-110px] translate-x-[-15px] cursor-pointer" @click="router.back()"/>
        <img :src="img" class=" mx-auto translate-y-[-60px] translate-x-[15px]"/>
        <RouterLink to="/setting" class=" mx-auto w-[43px] h-[40px] translate-y-[-110px] translate-x-[15px] cursor-pointer">
          <img :src="setting" />
        </RouterLink>
      </div>
      
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex justify-between pb-[31px]">
                <p class=" text-xl font-bold leading-6 text-[#006879] cursor-pointer">Профиль</p>
                <RouterLink to="/patientschildren"><a class=" text-xl font-bold leading-6 text-[#A3A3A3] cursor-pointer">Дети</a></RouterLink>
            </div>
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иван">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иванов">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иванович">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Дата рождения">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="ivanov@mail.ru">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" type="number" placeholder="+ 7 (903) - 465 - 37 - 26">
          <div>
            <p class=" text-[#A4A5A5] text-sm font-medium leading-4 mt-[23px] ml-[34px]">Пол</p>
            <div class="flex gap-[17px] mt-[16px] ml-[10px]">
                <div class="flex gap-[10px]">
                    <input class=" bg-[#E5F2FC]" type="checkbox">
                    <p class=" text-[#A4A5A5] text-sm font-medium leading-4">Жен.</p>
                </div>
                <div class="flex gap-[10px]">
                    <input class=" bg-[#E5F2FC]" type="checkbox">
                    <p class=" text-[#A4A5A5] text-sm font-medium leading-4">Муж.</p>
                </div>
            </div>
            <div class=" w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center mt-[34px]">
                <p class="text-[20px] leading-[24px] font-bold text-white cursor-pointer">Оформить подписку</p>
              </div>
            </div>
            </div>
        
      </div>
    </PagesTemplate>
      
</template>

