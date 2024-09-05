<script setup lang="ts">
import dalee from "@assets/icons/dalee.png";
import star from "@assets/icons/star.svg";
import card from "@assets/icons/material-symbols_sd-card-alert-outline.svg";
import { IDoctor } from "@//services/main-doctors/getDoctorsDataByCategoryId";

const props = defineProps<IDoctor>();
</script>

<template>
  <div class="w-full h-[88px] rounded-[13px] flex">
    <img :src="props.detail_picture" class="w-[81px] h-[81px]" />
    <div>
      <div class="flex w-[269px] px-[7px] py-[8px]">
        <div class="w-[164px]">
          <p class="font-semibold text-[15px] leading-[18px] text-[#00B9C2]">
            {{ props.name }}
          </p>
          <p class="font-medium text-[12px] leading-[14px] text-[#8E969B]">
            {{ props.detail_text }}
          </p>
        </div>
        <div class="flex ml-[30px]">
          <p class="font-medium text-[14px] leading-[17px] text-[#2C3E4F]">
            4.8
          </p>
          <img :src="star" class="w-[15px] h-[15px]" />
        </div>
      </div>
      <div class="flex gap-[90px] px-[7px]">
        <div class="flex">
          <img :src="card" class="w-[12px] h-[12px]" />
          <p class="font-semibold text-[10px] leading-3 text-[#006879]">
            О враче
          </p>
        </div>
        <div class="flex">
          <p
            class="font-medium text-[12px] leading-[14px] text-[#8E969B] mr-[10px]"
          >
            Записаться
          </p>
          <img :src="dalee" />
        </div>
      </div>
    </div>
  </div>
</template>
