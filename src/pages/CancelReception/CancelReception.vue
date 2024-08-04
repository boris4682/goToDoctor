<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import pen from '@assets/icons/lucide_pen.svg'
import img1 from '@assets/icons/iconamoon_profile-fill.svg'
import img2 from '@assets/icons/Group 7588.svg'
import img3 from '@assets/icons/222.svg'
import img4 from '@assets/icons/Group 7589.svg'
import img5 from '@assets/icons/mdi_calendar.svg'
import card from '@assets/icons/material-symbols_sd-card-alert-outline.svg'
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
                <div class="flex gap-[15px] justify-between mt-[35px]">
                    <p class=" font-semibold text-[15px] leading-9 text-[#00B9C2]">Запланированные</p>
                    <p class=" font-semibold text-[15px] leading-9 text-[#A3A3A3]">Завершенный</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center justify-center">
                        <img :src="img1" class=" translate-y-[-10px] w-[26px] h-[26px]"/>
                        <div class="ml-[20px]">
                            <p class=" font-semibold text-lg leading-[22px] text-[#006879]">Пациент</p>
                            <p class=" font-light text-[18px] leading-[22px] text-[#5D5D5D]">Пономаренко Ольга</p>
                        </div>
                    </div>
                    <img :src="pen"/>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center justify-center">
                        <img :src="img2" class=" translate-y-[-10px] w-[26px] h-[26px]"/>
                        <div class="ml-[20px]">
                            <p class=" font-semibold text-lg leading-[22px] text-[#006879]">Услуга</p>
                            <p class=" font-light text-[18px] leading-[22px] text-[#5D5D5D]">Лечение кариеса</p>
                        </div>
                    </div>
                    <img :src="pen"/>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center justify-center">
                        <img :src="img3" class=" translate-y-[-10px] w-[26px] h-[26px]"/>
                        <div class="ml-[20px]">
                            <p class=" font-semibold text-lg leading-[22px] text-[#006879]">Клиника</p>
                            <div class="flex justify-center items-center">
                                <p class=" font-light text-[18px] leading-[22px] text-[#5D5D5D]">Стоматология №1</p>
                                <img :src="card" class="ml-[15px]"/>
                                <p class=" font-semibold text-[11px] leading-[13px] text-[#006879]">О клиника</p>
                            </div>
                            
                        </div>
                    </div>
                    <img :src="pen"/>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center justify-center">
                        <img :src="img4" class=" translate-y-[-10px] w-[26px] h-[26px]"/>
                        <div class="ml-[20px]">
                            <p class=" font-semibold text-lg leading-[22px] text-[#006879]">Врач</p>
                            <div class="flex justify-center items-center">
                                <p class=" font-light text-[18px] leading-[22px] text-[#5D5D5D]">Иванов Алексей <br>Иванович</p>
                                <img :src="card" class="ml-[30px]"/>
                                <p class=" font-semibold text-[11px] leading-[13px] text-[#006879]">О враче</p>
                            </div>
                            
                        </div>
                    </div>
                    <img :src="pen"/>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center justify-center">
                        <img :src="img5" class=" translate-y-[-10px] w-[26px] h-[26px]"/>
                        <div class="ml-[20px]">
                            <p class=" font-semibold text-lg leading-[22px] text-[#006879]">Дата приёма</p>
                            <p class=" font-light text-[18px] leading-[22px] text-[#5D5D5D]">22.04.2024  9:00</p>
                        </div>
                    </div>
                    <img :src="pen"/>
                </div>
                <div class="flex items-center justify-center mt-[51px]">
                    <div class=" w-[305px] h-[55px] bg-[#00B9C2] rounded-[30px] flex items-center justify-center">
                        <p class=" font-bold text-xl leading-6 text-[#FFFFFF]">Отменить приём</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
</template>

