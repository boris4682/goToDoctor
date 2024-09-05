<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import OneDoctor from "@//components/OneDoctor/OneDoctor.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import {
  getDoctorsDataByCategoryId,
  IDoctor,
} from "@//services/main-doctors/getDoctorsDataByCategoryId";

const router = useRouter();
const { id } = useRoute().params;

const doctors = ref<IDoctor[]>();

const getDoctorsDataByCategoryIdHandler = async () => {
  const { data } = await getDoctorsDataByCategoryId(id);

  if (!data) {
    console.log("Ошибка на сервере");
    return;
  }

  doctors.value = data;
};

onMounted(getDoctorsDataByCategoryIdHandler);
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
          <div class="flex justify-center items-center">
            <p class="font-semibold text-[14px] leading-[13px] text-black">
              шаг 4
            </p>
          </div>
          <RouterLink to="" v-for="item in doctors" :key="item.id">
            <OneDoctor v-bind="{ ...item }" />
          </RouterLink>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
