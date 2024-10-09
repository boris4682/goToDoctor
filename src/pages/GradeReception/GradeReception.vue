<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import ico from "@assets/icons/ico.png";
import star from "@assets/icons/star.svg";
import YellowStar from "@assets/icons/YellowStar.svg";
import WhiteStar from "@assets/icons/WhiteStar.png";
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
            <p class="font-semibold text-[15px] leading-9 text-[#A3A3A3]">
              Запланированные
            </p>
            <p class="font-semibold text-[15px] leading-9 text-[#00B9C2]">
              Завершенный
            </p>
          </div>
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
          <div class="flex gap-[33px] justify-center items-center mt-[10px]">
            <img :src="YellowStar" />
            <img :src="YellowStar" />
            <img :src="YellowStar" />
            <img :src="YellowStar" />
            <img :src="WhiteStar" />
          </div>
          <textarea
            class="w-full h-[222px] bg-[#E5F2FC] rounded-[10px] px-[15px] py-[5px]"
            placeholder="Отзыв"
          ></textarea>
          <div class="flex justify-center items-center mt-5">
            <button
              class="w-full h-[55px] rounded-[26px] bg-[#00B9C2] text-white"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
