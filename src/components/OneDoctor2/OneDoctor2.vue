<script setup lang="ts">
import dalee from "@assets/icons/dalee.png";
import star from "@assets/icons/star.svg";
import card from "@assets/icons/material-symbols_sd-card-alert-outline.svg";
import { IDoctor } from "@//services/main-doctors/getDoctorsDataByCategoryId";
import { DOMEN } from "@//consts";
import Loader from "@//components/shared/Loader.vue";
import { ref } from "vue";
import Dialog from "primevue/dialog";
import { useRouter } from "vue-router";

const props = defineProps<IDoctor>();
const showModal = ref(false);
const isLoading = ref(false);

const router = useRouter();

const openModal = (event: Event) => {
  event.stopPropagation();
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const bookAppointment = () => {
  localStorage.setItem("selectedDoctor", JSON.stringify(props));
  router.push({
    path: "/stepfour",
    query: {
      id: props.id,
      services: JSON.stringify(props.service_list),
    },
  });
};
</script>

<template>
  <div class="w-full h-[88px] rounded-[13px] flex">
    <img
      :src="`${DOMEN}${props.detail_picture}`"
      class="w-[81px] h-[81px] rounded-full"
    />
    <div>
      <div class="flex w-[269px] px-[7px] py-[8px]">
        <div class="w-[164px]">
          <p class="font-semibold text-[15px] leading-[18px] text-[#00B9C2]">
            {{ props.name }}
          </p>
          <p class="font-medium text-[12px] leading-[14px] text-[#8E969B]">
            {{ props.doctor_specialization }}
          </p>
        </div>
        <div class="flex ml-[30px]">
          <p class="font-medium text-[14px] leading-[17px] text-[#2C3E4F]">
            4.8
          </p>
          <img :src="star" class="w-[15px] h-[15px]" />
        </div>
      </div>
      <div class="flex gap-[90px] px-[7px]">
        <div class="flex">
          <img :src="card" class="w-[12px] h-[12px]" />
          <p
            class="font-semibold text-[12px] leading-3 text-[#006879]"
            @click="openModal"
          >
            О враче
          </p>
        </div>
        <div class="flex cursor-pointer" @click="bookAppointment">
          <p
            class="font-medium text-[12px] leading-[14px] text-[#8E969B] mr-[10px]"
          >
            Записаться
          </p>
          <img :src="dalee" />
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="showModal" modal class="w-[90%]">
    <template v-if="isLoading">
      <Loader />
    </template>
    <template v-else>
      <div v-if="props">
        <h3 class="font-semibold text-[20px] text-center mb-4">
          {{ props.name }}
        </h3>

        <img
          :src="'https://idykvrachy.ru' + props.detail_picture"
          alt="doctor preview"
          class="w-full mb-4 rounded"
        />
        <div v-html="props.detail_text" class="text-gray-700 text-[15px]"></div>
      </div>

      <div v-else class="text-center">
        <p class="text-center text-gray-500 pt-[50px]">
          Информация о враче недоступна.
        </p>
      </div>
    </template>
    <template #footer>
      <button @click="closeModal" class="p-button p-component p-button-danger">
        Закрыть
      </button>
    </template>
  </Dialog>
</template>
