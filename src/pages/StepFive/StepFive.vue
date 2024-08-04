<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';
import doctor from '@assets/doctor2.png'
import dalee from '@assets/icons/dalee.png'
import star from '@assets/icons/star.svg'
import card from '@assets/icons/material-symbols_sd-card-alert-outline.svg'

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
                <div class="flex justify-center items-center">
                    <p class=" font-semibold text-[14px] leading-[13px] text-black">шаг 5</p>
                </div>
                <div class="mt-[20px] flex flex-col gap-[18px]">
                    <div class="w-full h-[134px] rounded-[13px] border flex shadow-lg">
                        <img :src="doctor" class=" rounded-l-[13px] h-full"/>
                        <div>
                            <div class="flex justify-between w-[210px] px-[7px] py-[8px]">
                                <div class="w-[210px] mt-[5px]">
                                    <p class=" font-semibold text-[18px] leading-[18px] text-[#00B9C2]">Иванов Алексей Иванович</p>
                                    <p class=" font-medium text-[12px] leading-[14px] text-[#00B9C2] mt-[4px]">Стоматолог-терапевт</p>
                                    <p class=" font-medium text-[12px] leading-[14px] text-[#8E969B] mt-[12px]">Стоматологическая №1</p>
                                    <div class="flex justify-end items-end mt-[15px]">
                                        <img :src="card" class="w-[12px] h-[12px]"/>
                                        <p class=" font-semibold text-[10px] leading-3 text-[#006879]">О враче</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between">
                    <button class="w-[163px] h-[37px] rounded-[27px] bg-[#00B9C2] text-white border shadow-lg">26.03.2024</button>
                    <button class="w-[114px] h-[37px] rounded-[27px] bg-[#FFFFFF] border shadow-lg">9:30</button>
                </div>
                <div class="flex justify-center mt-[85px]">
                    <button class="w-[305px] h-[55px] rounded-[30px] bg-[#00B9C2] text-white border shadow-lg">Записаться</button>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

