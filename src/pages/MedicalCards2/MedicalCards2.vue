<script setup lang="ts">
import back from "@assets/icons/back.png";
import OnePatient from "@//components/OnePatient/OnePatient.vue";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import Loader from "@//components/shared/Loader.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getAppointmentsForDoc } from "@/services/reception/getAppointmentsForDoc";
import { getPatientInfo } from "@/services/patients/getPatientInfo";
import { useToast } from "primevue/usetoast";

interface Patient {
  patient_id: string;
  patient_last_name: string;
  patient_u_name: string;
  patient_phone: string;
  photo: string | null;
}

const patients = ref<Patient[]>([]);
const isLoading = ref(true);
const toast = useToast();
const token = JSON.parse(localStorage.getItem("userData") ?? "")?.auth_token;
const router = useRouter();

const fetchPatientIds = async (): Promise<string[]> => {
  const patientIds = new Set<string>();
  const months = ["current", "prev", "next"];

  try {
    const promises = months.map((month) =>
      getAppointmentsForDoc({ token, month })
    );
    const responses = await Promise.all(promises);

    responses.forEach((response) => {
      if (response.data && Array.isArray(response.data)) {
        response.data.forEach((appointment) => {
          if (appointment.patient_id) {
            patientIds.add(appointment.patient_id);
          }
        });
      }
    });

    return Array.from(patientIds);
  } catch (error) {
    console.error("Ошибка при получении patient_id:", error);
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Не удалось получить данные о пациентах.",
      life: 3000,
    });
    isLoading.value = false;
    return [];
  }
};

const fetchPatientInfo = async (patientIds: string[]): Promise<Patient[]> => {
  const patientsData: Patient[] = [];

  try {
    const promises = patientIds.map((patientId: string) =>
      getPatientInfo({ token, patientId })
    );
    const responses = await Promise.all(promises);

    responses.forEach((response) => {
      if (response.data) {
        patientsData.push(response.data);
      }
    });

    return patientsData;
  } catch (error) {
    console.error("Ошибка при получении информации о пациентах:", error);
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Не удалось получить информацию о пациентах.",
      life: 3000,
    });
    isLoading.value = false;
    return [];
  }
};

const getPatientsData = async () => {
  isLoading.value = true;

  const patientIds = await fetchPatientIds();
  if (patientIds.length > 0) {
    const patientData = await fetchPatientInfo(patientIds);
    patients.value = patientData;
  }

  isLoading.value = false;
};

onMounted(() => {
  getPatientsData();
});
const goToReceptionMenu = (patient) => {
  localStorage.setItem("Patient_second_name", patient.patient_last_name);
  localStorage.setItem("Patient_u_name", patient.patient_u_name);

  localStorage.setItem("selectedPatient", JSON.stringify(patient));
  router.push("/receptionmenu");
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
        <div class="flex justify-center items-center">
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Медкарты
          </p>
        </div>
        <div class="mt-[26px]">
          <div v-if="isLoading" class="flex justify-center my-4">
            <Loader />
          </div>
          <div v-else>
            <div v-if="patients && patients.length > 0">
              <div
                v-for="(item, index) in patients"
                :key="index"
                class="cursor-pointer"
                @click="goToReceptionMenu(item)"
              >
                <OnePatient
                  :img="item.photo"
                  :patient_second_name="item.patient_last_name"
                  :patient_u_name="item.patient_u_name"
                  :patient_phone="item.patient_phone"
                />
              </div>
            </div>
            <div v-else class="text-center">
              <p class="text-center text-gray-500 pt-[50px]">
                Нет доступных медкарт пациентов. Хотите добавить пациента?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
