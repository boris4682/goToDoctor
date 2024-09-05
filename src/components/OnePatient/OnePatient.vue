<script setup lang="ts">
import { DOMEN } from "@//consts";
import dalee from "@assets/icons/dalee.png";

const props = defineProps<{
  img: string;
  patient_last_name: string;
  patient_u_name: string;
  patient_phone: string;
}>();
</script>

<template>
  <div
    class="flex items-center justify-center bg-[#F3F9FE] w-full h-[72px] rounded-[10px] mt-[9px]"
  >
    <img class="w-[52px] h-[52px]" :src="`${DOMEN}${props.img}`" />
    <div class="flex flex-col w-[258px] ml-[12px]">
      <p class="text-[18px] font-semibold leading-5 text-[#00B9C2]">
        {{ props.patient_last_name }} {{ props.patient_u_name }}
      </p>
      <div class="flex justify-between mt-[8px]">
        <p class="text-[15px] font-medium leading-5 text-[#2C3E4F]">
          {{ props.patient_phone }}
        </p>
      </div>
    </div>
    <img :src="dalee" class="ml-[15px]" />
  </div>
</template>
