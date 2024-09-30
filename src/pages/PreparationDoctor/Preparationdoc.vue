<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@/components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const openPDF = () => {
  window.open(
    "https://idykvrachy.ru//upload/recommendations/recommendations_dentists.pdf",
    "_blank"
  );
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
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Подготовка
          </p>

          <button
            class="flex items-center justify-center w-full h-[70px] border border-[#00B9C2] rounded-[30px] text-[#00B9C2] hover:bg-[#F3F9FE] transition-all font-bold"
            @click="openPDF"
          >
            <img
              src="@/assets/icons/ion_document-sharp.png"
              alt="Документ"
              class="w-[40px] h-[40px] mr-[10px]"
              ъ
            />
            <span class="text-[16px]"
              >Методические рекомендации для врачей-стоматологов</span
            >
          </button>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>

<style scoped>
button {
  padding: 10px 20px;
}
</style>
