<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import OnePlannedReception from "@//components/OnePlannedReception";
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
      <div class="w-[354px] pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <div class="flex gap-[15px] justify-between mt-[35px]">
            <p class="font-semibold text-[15px] leading-9 text-[#A3A3A3]">
              Запланированные
            </p>
            <p class="font-semibold text-[15px] leading-9 text-[#00B9C2]">
              Завершенный
            </p>
          </div>
          <OnePlannedReception />
          <OnePlannedReception />
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
