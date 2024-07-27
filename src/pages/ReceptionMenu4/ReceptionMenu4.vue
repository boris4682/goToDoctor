<script setup lang='ts'>
import back from '@assets/icons/back.png'
import fourth from '@assets/icons/fourth.png'
import fifth from '@assets/icons/fifth.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import avatar from '@assets/icons/userpic.png'
import { useRouter } from 'vue-router';



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
            <div class="flex flex-col gap-[22px] translate-y-[-10px]">
                <div class=" w-full mt-[25px] h-[124px] bg-[#E5F2FC] rounded-[10px]">
                    <div class="flex justify-between px-[15px] py-[5px]">
                        <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">Запланированные</p>
                        <div class=" rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center">
                            <p class=" text-center text-[16px] font-semibold leading-5 text-white">6</p>
                        </div>
                    </div>
                    <img :src="fourth" class="ml-[15px]"/>
                </div>
                <div class=" w-full h-[124px] bg-[#E5F2FC] rounded-[10px]">
                    <div class="flex justify-between px-[15px] py-[5px]">
                        <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">Завершенные</p>
                        <div class=" rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center">
                            <p class=" text-center text-[16px] font-semibold leading-5 text-white">6</p>
                        </div>
                    </div>
                    <img :src="fifth" class="ml-[15px]"/>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

