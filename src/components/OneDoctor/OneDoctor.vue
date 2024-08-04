<script setup lang='ts'>
import doctor from '@assets/doctor1.png'
import dalee from '@assets/icons/dalee.png'
import star from '@assets/icons/star.svg'
import card from '@assets/icons/material-symbols_sd-card-alert-outline.svg'


</script>
<template>
    <div class="w-full h-[88px] rounded-[13px] border flex shadow-lg">
        <img :src="doctor" class=" rounded-l-[13px] h-full"/>
        <div>
            <div class="flex justify-between w-[269px] px-[7px] py-[8px]">
                <div class="w-[164px]">
                    <p class=" font-semibold text-[15px] leading-[18px] text-[#00B9C2]">Микуленко Татьяна Анатольевна</p>
                    <p class=" font-medium text-[12px] leading-[14px] text-[#8E969B]">Стоматолог-терапевт</p>
                </div>
                <div class="flex">
                    <p class=" font-medium text-[14px] leading-[17px] text-[#2C3E4F]">4.8</p>
                    <img :src="star" class="w-[15px] h-[15px]"/>
                </div>
            </div>
            <div class="flex justify-between px-[7px]">
                <div class="flex">
                    <img :src="card" class="w-[12px] h-[12px]"/>
                    <p class=" font-semibold text-[10px] leading-3 text-[#006879]">О враче</p>
                </div>
                <img :src="dalee" />
            </div>
        </div>
    </div>
</template>

