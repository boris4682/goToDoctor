<script setup lang='ts'>
import back from '@assets/icons/back.png'
import first from '@assets/icons/first.png'
import second from '@assets/icons/second.png'
import third from '@assets/icons/third.png'
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
            <div class="flex flex-col gap-[22px] translate-y-[-10px]">
                <p class=" font-semibold text-[18px] leading-[18px] text-[#00B9C2]">Пономаренко Ольга</p>
                <div class="flex gap-[15px] justify-center items-center">
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">12.04.2024</p>
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">9:00</p>
                    <button class=" ml-[10px] w-[211px] h-[28px] rounded-[12px] border shadow-xl text-[#006879]">Посмотреть мой приём</button>
                </div>
                <div class=" w-full h-[124px] bg-[#E5F2FC] rounded-[10px]">
                    <div class="flex justify-between px-[15px] py-[5px]">
                        <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">История посещений</p>
                        <div class=" rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center">
                            <p class=" text-center text-[16px] font-semibold leading-5 text-white">6</p>
                        </div>
                    </div>
                    <img :src="first" class="ml-[15px]"/>
                </div>
                <div class=" w-full h-[124px] bg-[#E5F2FC] rounded-[10px]">
                    <div class="flex justify-between px-[15px] py-[5px]">
                        <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">История посещений</p>
                        <div class=" rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center">
                            <p class=" text-center text-[16px] font-semibold leading-5 text-white">6</p>
                        </div>
                    </div>
                    <img :src="second" class="ml-[15px]"/>
                </div>
                <div class=" w-full h-[124px] bg-[#E5F2FC] rounded-[10px]">
                    <div class="flex justify-between px-[15px] py-[5px]">
                        <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">История посещений</p>
                        <div class=" rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center">
                            <p class=" text-center text-[16px] font-semibold leading-5 text-white">6</p>
                        </div>
                    </div>
                    <img :src="third" class="ml-[15px]"/>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

