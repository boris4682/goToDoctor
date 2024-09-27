<script setup lang="ts">
import dalee from "@assets/icons/dalee.png";
import card from "@assets/icons/material-symbols_sd-card-alert-outline.svg";
import { DOMEN } from "@//consts";
import { IDoctor } from "@//services/main-doctors/getDoctorsDataByCategoryId";
import Loader from "@//components/shared/Loader.vue";
import { ref } from "vue";
import Dialog from "primevue/dialog";

const props = defineProps<IDoctor>();
const showModal = ref(false);
const isLoading = ref(false);

const openModal = (event: Event) => {
  event.stopPropagation();
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div
    class="w-full h-[100px] rounded-[13px] border flex shadow-lg items-center px-4 bg-white"
  >
    <img
      :src="`${DOMEN}${props.detail_picture}`"
      class="w-[90px] h-[90px] rounded-full object-cover"
    />
    <div class="flex-grow mx-4">
      <div class="flex justify-between items-center">
        <p class="font-semibold text-[16px] leading-[18px] text-[#00B9C2]">
          {{ props.name }}
        </p>
      </div>
      <p class="font-medium text-[12px] leading-[14px] text-[#8E969B] mt-1">
        {{ props.doctor_specialization }}
      </p>
      <div class="flex items-center mt-2">
        <img :src="card" class="w-[12px] h-[12px] mr-1" />
        <p
          class="font-semibold text-[12px] leading-3 text-[#006879]"
          @click="openModal"
        >
          О враче
        </p>
      </div>
    </div>
    <img :src="dalee" />
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
