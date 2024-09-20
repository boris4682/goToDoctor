<script setup lang="ts">
import dalee from "@assets/icons/dalee.png";
//import star from "@assets/icons/star.svg";
import card from "@assets/icons/material-symbols_sd-card-alert-outline.svg";
import { DOMEN } from "@//consts";
import { IDoctor } from "@//services/main-doctors/getDoctorsDataByCategoryId";

const props = defineProps<IDoctor>();
</script>

<template>
  <div
    class="w-full h-[100px] rounded-[13px] border flex shadow-lg items-center px-4 bg-white"
  >
    <img
      :src="`${DOMEN}${props.detail_picture}`"
      class="w-[90px] h-[90px] rounded-full object-cover"
    />
    <div class="flex-grow mx-4">
      <div class="flex justify-between items-center">
        <p class="font-semibold text-[16px] leading-[18px] text-[#00B9C2]">
          {{ props.name }}
        </p>
        <!--<div class="flex items-center">
          <p class="font-medium text-[14px] leading-[17px] text-[#2C3E4F] mr-1">
            4.8
          </p>
          <img :src="star" class="w-[15px] h-[15px]" />
        </div>-->
      </div>
      <p class="font-medium text-[12px] leading-[14px] text-[#8E969B] mt-1">
        {{ props.detail_text }}
      </p>
      <div class="flex items-center mt-2">
        <img :src="card" class="w-[12px] h-[12px] mr-1" />
        <p class="font-semibold text-[12px] leading-3 text-[#006879]">
          О враче
        </p>
      </div>
    </div>
    <img :src="dalee" />
  </div>
</template>
