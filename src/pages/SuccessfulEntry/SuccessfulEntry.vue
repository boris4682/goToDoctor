<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@/components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import smile from "@assets/icons/Icon/Emoji.svg";

const goToMainPage = () => {
  router.push("/mainpage");
};
const goToMedical = () => {
  router.push("/medicalcards");
};
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
          <div class="flex flex-col justify-center items-center mt-[73px]">
            <img :src="smile" />
            <div class="flex flex-col justify-center items-center mt-[30px]">
              <p class="font-medium text-[15px] leading-[19px] text-[#00B9C2]">
                Вы успешно записаны
              </p>
              <p
                class="font-bold text-[18px] leading-[23px] text-[#00B9C2] mt-[10px]"
              >
                Перейти к списку записей
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center mt-[25px]">
            <button
              class="w-[305px] h-[55px] rounded-[30px] bg-[#00B9C2] text-white"
              @click="goToMedical"
            >
              Перейти
            </button>
            <button
              class="w-[305px] h-[55px] rounded-[30px] bg-white text-[#00B9C2] border border-[#00B9C2] mt-[25px]"
              @click="goToMainPage"
            >
              Главная
            </button>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
