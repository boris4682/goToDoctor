<script setup lang="ts">
import imgHome from '@//assets/icons/iconamoon_home-duotone.png'
import imgNotebook from '@//assets/icons/lets-icons_notebook-light.png'
import imgMedical from '@//assets/icons/solar_medical-kit-linear.png'
import imgProfile from '@//assets/icons/iconamoon_profile.png'
</script>
<template>
    <div class="flex justify-around">
        <div class="flex flex-col justify-center items-center cursor-pointer">
            <img :src="imgHome"/>
            <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">Главная</p>
        </div>
        <div class="flex flex-col justify-center items-center cursor-pointer">
            <img :src="imgNotebook"/>
            <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">Запись</p>
        </div>
        <div class="flex flex-col justify-center items-center cursor-pointer">
            <img :src="imgMedical"/>
            <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">Запись</p>
        </div>
        <div class="flex flex-col justify-center items-center cursor-pointer">
            <img :src="imgProfile"/>
            <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">Запись</p>
        </div>
    </div>
</template>