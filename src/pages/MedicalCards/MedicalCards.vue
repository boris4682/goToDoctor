<script setup lang='ts'>
import back from '@assets/icons/back.png'
import Search from '@//components/Search/Search.vue';
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';
import Checkbox from 'primevue/checkbox';

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
            <div class="flex flex-col gap-[22px] translate-y-[-40px]">
                <p class=" font-semibold text-[18px] leading-[18px] text-[#00B9C2]">Пономаренко Ольга</p>
                <div class="flex gap-[15px]">
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">12.04.2024</p>
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">9:00</p>
                </div>
            </div>
          <Search/>
          <div class="mt-[26px]">
            <div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px]">
              <p class="text-[20px] font-semibold leading-5 text-black">1.</p>
              <div class="flex flex-col w-[258px] ml-[12px]">
                <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Чек-лист 1</p>
                <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">24.04.2024</p>
              </div>
              <input class=" bg-[#E5F2FC]" type="checkbox">
            </div>
            <div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px] mt-[9px]">
              <p class="text-[20px] font-semibold leading-5 text-black">2.</p>
              <div class="flex flex-col w-[258px] ml-[12px]">
                <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Чек-лист 1</p>
                <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">24.04.2024</p>
              </div>
              <input class=" bg-[#E5F2FC]" type="checkbox">
            </div>
          </div>
          
        </div>
        
      </div>
    </PagesTemplate>
      
</template>

