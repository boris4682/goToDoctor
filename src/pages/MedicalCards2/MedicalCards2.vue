<script setup lang='ts'>
import back from '@assets/icons/back.png'
import Search from '@//components/Search/Search.vue';
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';
import avatar from '@assets/icons/userpic.png'

const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-148px] cursor-pointer" @click="router.back()"/>
        <img :src="avatar" class="translate-x-[-10px] translate-y-[-75px]"/>
      </div>
      
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex gap-[15px]">
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">12.04.2024</p>
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">9:00</p>
            </div>
          <Search class="mt-[30px]"/>
          <div class="mt-[26px] flex flex-col gap-[9px]">
            <RouterLink to="/checklist"><div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px]">
              <p class="text-[20px] font-semibold leading-5 text-black">1.</p>
              <div class="flex flex-col w-[258px] ml-[12px]">
                <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Чек-лист 1</p>
                <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">24.04.2024</p>
              </div>
              <input class=" bg-[#E5F2FC]" type="checkbox">
            </div></RouterLink>
            <RouterLink to="/checklist"><div class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px]">
              <p class="text-[20px] font-semibold leading-5 text-black">1.</p>
              <div class="flex flex-col w-[258px] ml-[12px]">
                <p class=" text-[18px] font-semibold leading-5 text-[#00B9C2]">Чек-лист 1</p>
                <p class=" text-[15px] font-medium leading-5 text-[#2C3E4F]">24.04.2024</p>
              </div>
              <input class=" bg-[#E5F2FC]" type="checkbox">
            </div></RouterLink>
          </div>
          
        </div>
        
      </div>
    </PagesTemplate>
      
</template>

