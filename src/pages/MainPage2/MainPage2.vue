<script setup lang="ts">
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import colocol from "@assets/icons/mingcute_notification-fill.svg";
import photo from "@assets/мальчик и смартфон 1.png";
import avatar from "@assets/icons/Avatar23.png";
import OneDoctor2 from "@//components/OneDoctor2/OneDoctor2.vue";
import zub from "@assets/icons/zub.png";
</script>

<template>
  <PagesTemplate class="pb-[100px]">
    <div class="flex mt-[90px] items-center gap-[8px] ml-[21px]">
      <img :src="avatar" />
      <p class="font-semiboldm text-sm leading-[18px] text-[#040404]">
        Здравствуйте, Иван Иванов
      </p>
    </div>
    <p
      class="font-semibold text-[18px] leading-[18px] text-[#006879] mt-[14px] ml-[19px]"
    >
      Предложения наших партнеров
    </p>
    <img :src="colocol" class="translate-y-[-70px] translate-x-[340px]" />
    <div
      class="w-[361px] h-[142px] border bg-gradient-to-r from-[#00B9C2] to-[#00585C] rounded-[14px] flex"
    >
      <div class="px-[33px] py-[18px]">
        <h4 class="font-semibold text-[20px] leading-6 text-white">Акции</h4>
        <p
          class="font-semibold text-[11px] leading-[13px] text-[#DADADA] w-[196px] mt-[7px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
        </p>
        <button class="w-[125px] h-[25px] rounded-[7px] bg-white mt-[14px]">
          Перейти
        </button>
      </div>
      <div class="flex justify-center items-center">
        <img :src="photo" class="w-[87px] h-[87px]" />
      </div>
    </div>
    <p
      class="mt-[37px] ml-[21px] font-semibold text-[15px] leading-6 text-[#006879]"
    >
      Все врачи
    </p>
    <div
      class="w-[280px] h-[47px] rounded-[28px] bg-[#E5F2FC] mt-[28px] flex items-center justify-center gap-[12px]"
    >
      <img :src="zub" />
      <p class="font-semibold text-[14px] leading-6 text-[#000000]">
        Детский стоматолог
      </p>
    </div>
    <div class="flex justify-center items-center mt-[34px]">
      <div class="w-[361px] rounded-[14px] border shadow-lg gap-[px]">
        <div class="py-[16px] px-[17px]">
          <OneDoctor2 />
          <OneDoctor2 />
          <OneDoctor2 />
          <OneDoctor2 />
          <OneDoctor2 />
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
