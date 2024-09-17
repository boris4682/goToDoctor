<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/par21.svg'
import photo2 from '@assets/par22.svg'
import photo3 from '@assets/par23.svg'
import photo4 from '@assets/par24.svg'
import { useRouter } from 'vue-router';
import {usePreparationsStore} from "@/services/preparation/preparationsStore.ts";
const router = useRouter()

const preparationsStore = usePreparationsStore()
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
                <p class="text-[20px] font-semibold leading-[18px] text-[#006879]">Родитель</p>
            </div>
            <div class="flex flex-col gap-[15px] mt-[30px]">
                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo1" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Рекомендации</p>
                </div>
                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo2" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Анкета</p>
                </div>
                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center" @click="router.push(`/checklist/${preparationsStore.checklist}`)">
                    <img :src="photo3" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Чек-лист</p>
                </div>
                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo4" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Записаться</p>
                </div>
            </div>


        </div>
      </div>
    </PagesTemplate>

</template>

