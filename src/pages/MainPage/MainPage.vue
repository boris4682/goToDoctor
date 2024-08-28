<script setup lang="ts">
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import OneDoctor2 from "@//components/OneDoctor2/OneDoctor2.vue";
import colocol from "@assets/icons/mingcute_notification-fill.svg";
import photo from "@assets/мальчик и смартфон 1.png";
import dalee from "@assets/icons/dalee.svg";
import { ref } from "vue";
import { onMounted } from "vue";
import { getUserInfo } from "../../services/User/getUserInfo";
import { useRouter } from "vue-router";
import { getDoctorsCategory } from "@//services/main-doctors/getDoctorsCategory";
import { useDoctorsStore } from "@//services/main-doctors/doctorsStore";
import { storeToRefs } from "pinia";
import { getDoctorsDataByCategoryId } from "@//services/main-doctors/getDoctorsDataByCategoryId";

const router = useRouter();

const doctorsStore = useDoctorsStore();
const { sectionId } = storeToRefs(doctorsStore);

const user = ref();
const doctorsCategory = ref();
const doctors = ref();

const fetchUserInfo = async () => {
  const { data, status } = await getUserInfo();
  if (status === 200) {
    if (data.success) {
      user.value = data.data;
    }
  } else {
    console.log("Ошибка на сервере");
  }
};

const fetchDoctorsCategory = async () => {
  const { data, status } = await getDoctorsCategory();
  if (status === 200) {
    doctorsCategory.value = data;
  } else {
    console.log("Ошибка на сервере");
  }
};

const fetchDoctorsDataByCategoryId = async (sectionId: string) => {
  const { data } = await getDoctorsDataByCategoryId(sectionId);
  console.log(data);
  if (data) {
    doctors.value = data;
  } else {
    console.log("Ошибка на сервере");
  }
};

onMounted(() => {
  fetchUserInfo();
  fetchDoctorsCategory();
});
</script>

<template>
  <PagesTemplate class="pb-[80px]" v-if="user">
    <div
      class="flex mt-[90px] items-center gap-[8px] ml-[21px]"
      @click="router.push('/lcpatient')"
    >
      <img
        :src="`https://idykvrachy.ru${user.personal_photo}`"
        class="size-10 rounded-full"
      />
      <p
        class="font-semiboldm text-sm leading-[18px] font-semibold text-[#040404]"
      >
        Здравствуйте, {{ `${user.name} ${user.second_name}` }}
      </p>
    </div>
    <p
      class="font-semibold text-[18px] leading-[18px] text-[#006879] mt-[14px] ml-[19px]"
    >
      Предложения наших партнеров
    </p>
    <img :src="colocol" class="translate-y-[-70px] translate-x-[340px]" />
    <div
      class="w-[361px] h-[142px] border bg-gradient-to-r from-[#00B9C2] to-[#00585C] rounded-[14px] flex"
    >
      <div class="px-[33px] py-[18px]">
        <h4 class="font-semibold text-[20px] leading-6 text-white">Акции</h4>
        <p
          class="font-semibold text-[11px] leading-[13px] text-[#DADADA] w-[196px] mt-[7px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
        </p>
        <button class="w-[125px] h-[25px] rounded-[7px] bg-white mt-[14px]">
          Перейти
        </button>
      </div>
      <div class="flex justify-center items-center">
        <img :src="photo" class="w-[87px] h-[87px]" />
      </div>
    </div>
    <p
      class="mt-[37px] ml-[21px] font-semibold text-[15px] leading-6 text-[#006879]"
    >
      Все врачи
    </p>
    <div class="flex gap-5 overflow-auto py-2">
      <div
        class="min-w-[80vw] h-[47px] rounded-[28px] bg-[#E5F2FC] mt-[28px] flex items-center justify-center gap-[12px]"
        v-for="(item, index) in doctorsCategory"
        @click="() => fetchDoctorsDataByCategoryId(item.category_id)"
        :key="index"
      >
        <img :src="item.picture" />
        <p class="font-semibold text-[14px] leading-6 text-[#000000]">
          {{ item.name }}
        </p>
      </div>
    </div>

    <div v-if="doctors" class="flex justify-center items-center mt-[34px]">
      <div class="w-[361px] rounded-[14px] border shadow-lg gap-[px]">
        <div class="py-[16px] px-[17px]">
          <OneDoctor2
            v-for="(item, index) in doctors"
            :key="index"
            v-bind="{ ...item }"
          />
        </div>
      </div>
    </div>

    <p
      v-if="!doctors"
      class="mt-[37px] ml-[21px] font-semibold text-[15px] leading-6 text-[#006879]"
    >
      Запись
    </p>
    <div v-if="!doctors" class="flex justify-center items-center mt-[34px]">
      <div class="w-[361px] h-[137px] rounded-[14px] border shadow-lg">
        <div class="flex flex-col px-[32px] py-[17px]">
          <p class="font-semibold text-[20px] leading-6 text-[#00B9C2]">
            Стоматолог хирург
          </p>
          <p class="font-normal text-[15px] leading-6 text-[#979797]">
            Сегодня в 18:00
          </p>
          <div class="flex justify-between mt-[40px]">
            <p class="font-semibold text-[12px] leading-[15px] text-[#828282]">
              Стоматологическая №1
            </p>
            <img :src="dalee" />
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
