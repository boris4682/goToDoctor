<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import OneReception from "@//components/OneReception";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <PagesTemplate class="pb-[80px]">
    <div class="h-[15vh]"></div>
    <div class="flex">
      <img
        :src="back"
        class="mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer"
        @click="router.back()"
      />
    </div>

    <div class="flex justify-center">
      <div class="w-[354px] max-w-full pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <div class="flex gap-[15px] justify-between mt-[35px]">
            <p class="font-semibold text-[15px] leading-9 text-[#00B9C2]">
              Запланированные
            </p>
            <p class="font-semibold text-[15px] leading-9 text-[#A3A3A3]">
              Завершенный
            </p>
          </div>
          <RouterLink to="/cancelreception"><OneReception /></RouterLink>
          <RouterLink to="/cancelreception"><OneReception /></RouterLink>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
