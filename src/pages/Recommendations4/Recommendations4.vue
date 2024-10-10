<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import photo1 from "@assets/rec.png";
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
          <p class="font-semibold text-[18px] leading-[18px] text-[#006879]">
            Рекомендации для родителей
          </p>
        </div>
        <div class="flex items-center justify-center">
          <p
            class="w-[178px] font-semibold text-[14px] leading-[17px] text-[#979797]"
          >
            При подготовке к стоматологической помощидетей с расстройством
            аутистического<br />спектра
          </p>
          <img :src="photo1" />
        </div>
        <div class="flex justify-between items-center mt-[27px]">
          <p class="font-semibold text-[12px] leading-[14px] text-[#A3A3A3]">
            Общие<br />рекомендации
          </p>
          <p class="font-semibold text-[13px] leading-[17px] text-[#00B9C2]">
            Специальные<br />рекомендации
          </p>
        </div>
        <p
          class="font-semibold text-[15px] leading-[17px] text-[#000000] mt-[17px]"
        >
          1. Начинайте подготовку заранее, как минимум за две недели до
          планируемого приема;
        </p>
        <p
          class="font-semibold text-[15px] leading-[17px] text-[#000000] mt-[10px]"
        >
          2. Заполните предварительную анкету и чек-лист оценки навыка приема
          стоматолога;
        </p>
        <p
          class="font-semibold text-[15px] leading-[17px] text-[#000000] mt-[17px]"
        >
          3. Покажите ребенку ознакомительный видеоролик, освещающий все этапы
          приема стоматолога. Просмотр видеоролика проводите в домашней
          обстановке, в привычных условиях, обсуждая и дополнительно
          проговаривая с ребенком основные моменты. Рекомендуется ежедневно
          повторять просмотр ролика, пока увиденный материал не станет знаком и
          узнаваем.
        </p>
        <div class="flex justify-center items-center mt-[35px]">
          <RouterLink to="/recommendations5"
            ><button
              class="w-[248px] h-[45px] border border-[#00B9C2] rounded-[30px] text-[#00B9C2]"
            >
              Далее
            </button></RouterLink
          >
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
