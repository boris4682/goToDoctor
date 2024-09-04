<script setup lang="ts">
import imgHome from "@//assets/icons/iconamoon_home-duotone.png";
import imgNotebook from "@//assets/icons/lets-icons_notebook-light.png";
import imgMedical from "@//assets/icons/solar_medical-kit-linear.png";
import imgProfile from "@//assets/icons/iconamoon_profile.png";
</script>
<template>
  <div class="flex justify-around pb-5">
    <RouterLink to="/mainpage"
      ><div class="flex flex-col justify-center items-center cursor-pointer">
        <img :src="imgHome" />
        <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">
          Главная
        </p>
      </div></RouterLink
    >
    <RouterLink to="/receptionmenu2"
      ><div class="flex flex-col justify-center items-center cursor-pointer">
        <img :src="imgNotebook" />
        <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">
          Запись
        </p>
      </div></RouterLink
    >
    <RouterLink to="/stepone"
      ><div class="flex flex-col justify-center items-center cursor-pointer">
        <img :src="imgMedical" />
        <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">
          Подготовка
        </p>
      </div></RouterLink
    >
    <RouterLink to="/medicalcards"
      ><div class="flex flex-col justify-center items-center cursor-pointer">
        <img :src="imgProfile" />
        <p class="text-[11px] font-medium leading-[13px] text-[#A3A3A3]">
          Медкарта
        </p>
      </div></RouterLink
    >
  </div>
</template>
