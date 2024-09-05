<script setup lang="ts">
import ico from "@assets/icons/ico.png";
import star from "@assets/icons/star.svg";
</script>

<template>
  <div class="w-full h-[193px] shadow-xl border rounded-3xl">
    <div class="flex justify-around mt-[10px] items-center">
      <img :src="ico" class="w-[44px] h-[52px]" />
      <div class="flex flex-col">
        <h6 class="font-semibold text-[20px] leading-5 text-[#00B9C2]">
          Стоматологическая №1
        </h6>
        <div class="flex items-center justify-center mt-[8px]">
          <div class="flex">
            <p class="font-medium text-xs leading-4 text-[#8E969B]">
              Стоматолог хирург
            </p>
            <p
              class="font-normal text-xs leading-[14px] text-[#2C3E4F] ml-[28px]"
            >
              Оценка:
            </p>
          </div>
          <div class="flex text-center">
            <p
              class="font-medium text-[15px] leading-[18px] text-[#2C3E4F] ml-1"
            >
              4.8
            </p>
            <img :src="star" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-around mt-[18px]">
      <div
        class="w-[138px] h-[31px] rounded-[17px] bg-[#006879] flex gap-[15px] items-center justify-center"
      >
        <p class="font-medium text-[15px] leading-5 text-[#FFFFFF]">июнь</p>
        <p class="font-medium text-[15px] leading-5 text-[#FFFFFF]">чт</p>
        <p class="font-medium text-[15px] leading-5 text-[#FFFFFF]">26</p>
      </div>
      <div
        class="w-[82px] h-[31px] rounded-[17px] bg-[#006879] flex gap-[15px] items-center justify-center"
      >
        <p class="font-medium text-[15px] leading-5 text-[#FFFFFF]">9:40</p>
      </div>
    </div>
    <RouterLink to="/gradereception"
      ><div class="flex justify-center items-center mt-5">
        <button
          class="w-[185px] h-[34px] rounded-[26px] bg-[#006879] text-white"
        >
          Оценить приём
        </button>
      </div></RouterLink
    >
  </div>
</template>
