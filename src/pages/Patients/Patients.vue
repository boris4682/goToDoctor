<script setup lang="ts">
import back from "@assets/icons/back.png";
//import OnePatient from "@//components/OnePatient/OnePatient.vue";
import Search2 from "@//components/Search2/Search2.vue";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
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
        <Search2 class="translate-y-[-30px] z-50" />
        <div class="mt-[26px]"></div>
      </div>
    </div>
  </PagesTemplate>
</template>
