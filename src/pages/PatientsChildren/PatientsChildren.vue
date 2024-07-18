<script setup lang='ts'>
import back from '@assets/icons/back.png'
import dalee from '@assets/icons/dalee.png'
import img from '@assets/userpic.png'
import setting from '@assets/icons/setting.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-60px] cursor-pointer" @click="router.back()"/>
        <RouterLink to="/setting" class=" mx-auto w-[43px] h-[40px] translate-y-[-80px] translate-x-[70px] cursor-pointer">
          <img :src="setting" />
        </RouterLink>
      </div>
      
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex justify-between pb-[31px]">
                <RouterLink to="/lcpatient"><p class=" text-xl font-bold leading-6 text-[#A3A3A3] cursor-pointer">Пациент</p></RouterLink>
                <p class=" text-xl font-bold leading-6 text-[#006879] cursor-pointer">Дети</p>
            </div>
          
          <div>
            <div class="w-full h-[158px] bg-[#F3F9FE] rounded-[10px] ">
                <RouterLink to="/lcchild"><div class="flex justify-around items-center cursor-pointer">
                    <img :src="img" class="mt-[36px]"/>
                    <div class="flex flex-col">
                        <p class=" mt-[36px] text-[15px] font-semibold leading-[18px] text-[#00B9C2]">Пономаренко Вячеслав</p>
                        <p class=" text-[15px] font-medium leading-[18px] text-[#2C3E4F]">25.06.2010</p>
                    </div>
                    <img :src="dalee" class="mt-[36px] w-[5px] h-[9px]"/>
                </div></RouterLink>
                <div class="flex justify-around mt-[12px]">
                    <button class="bg-[#00B9C2] text-white rounded-[7px] w-[102px] h-[28px] cursor-pointer">удалить</button>
                    <button class="bg-[#00B9C2] text-white rounded-[7px] w-[166px] h-[28px] cursor-pointer">редактировать</button>
                </div>
            </div>
            
            <div class=" w-full h-[55px] rounded-[30px] border border-[#00B9C2] bg-white flex items-center justify-center mt-[34px]">
                <p class="text-[20px] leading-[24px] font-bold text-[#00B9C2] cursor-pointer">Добавить ребенка +</p>
              </div>
            </div>
            </div>
        
      </div>
    </PagesTemplate>
      
</template>

