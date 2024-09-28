<script setup lang="ts">
import back from "@assets/icons/back.png";
import MedicalCard from "@//components/MedicalCard/MedicalCard.vue";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import Loader from "@//components/shared/Loader.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { getUserReceptions } from "@//services/reception/getUserReceptions";

const receptions = ref<any[]>([]);
const toast = useToast();
const router = useRouter();
const isLoading = ref(true);

const token = JSON.parse(localStorage.getItem("userData") ?? "")?.auth_token;
const patientId = localStorage.getItem("selectedPatientId");
const complete = "0";

const fetchReceptions = async () => {
  try {
    const { data, status } = await getUserReceptions({
      token,
      patientId: patientId ?? '',
      complete,
    });

    if (status === 200 && data) {
      receptions.value = data;
    } else {
      toast.add({
        severity: "error",
        summary: "Ошибка",
        detail: "Не удалось получить данные о приёмах",
        life: 3000,
      });
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Ошибка сервера",
      life: 3000,
    });
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchReceptions();
});
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
        <div class="flex justify-center items-center">
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Приемы в клинике
          </p>
        </div>
        <div class="mt-[26px]">
          <div v-if="isLoading" class="flex justify-center my-4">
            <Loader />
          </div>
          <div v-else>
            <div
              v-for="reception in receptions"
              :key="reception.reception_id"
              class="cursor-pointer"
            >
              <MedicalCard
                :doctorId="reception.reception_id"
                :doctorSpecialization="reception.doctor_specialization"
                :doctorClinic="reception.doctor_clinic"
                :doctorName="reception.doctor_name"
                :datetime="reception.datetime"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
