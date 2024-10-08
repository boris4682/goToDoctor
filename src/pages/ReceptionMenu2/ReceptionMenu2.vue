<script setup lang="ts">
import back from "@assets/icons/back.png";
import fourth from "@assets/icons/fourth.png";
import fifth from "@assets/icons/fifth.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { getUserReceptions } from "@/services/reception/getUserReceptions";

const router = useRouter();
const toast = useToast();
const isLoading = ref(true);

const plannedReceptions = ref(0);
const completedReceptions = ref(0);

const receptionsPlanned = ref<any[]>([]);
const receptionsCompleted = ref<any[]>([]);

const token = JSON.parse(localStorage.getItem("userData") ?? "")?.auth_token;
const selectedPatient = JSON.parse(
  localStorage.getItem("selectedPatient") ?? "{}"
);
const patientId = selectedPatient?.patient_id ?? "";

const fetchReceptions = async () => {
  try {
    const [plannedResponse, completedResponse] = await Promise.all([
      getUserReceptions({
        token,
        patientId,
        complete: "0",
      }),
      getUserReceptions({
        token,
        patientId,
        complete: "1",
      }),
    ]);

    if (plannedResponse.status === 200 && completedResponse.status === 200) {
      receptionsPlanned.value = plannedResponse.data;
      receptionsCompleted.value = completedResponse.data;

      plannedReceptions.value = receptionsPlanned.value.length;
      completedReceptions.value = receptionsCompleted.value.length;
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

const handlePlannedReceptionsClick = () => {
  if (plannedReceptions.value < 1) {
    toast.add({
      severity: "warn",
      summary: "Нет записей",
      detail: "Запланированных приёмов нет.",
      life: 3000,
    });
  } else {
    router.push({ name: "PlannedReception", query: { complete: "0" } });
  }
};

const handleCompletedReceptionsClick = () => {
  if (completedReceptions.value < 1) {
    toast.add({
      severity: "warn",
      summary: "Нет записей",
      detail: "Завершённых приёмов нет.",
      life: 3000,
    });
  } else {
    router.push({ name: "PlannedReception", query: { complete: "1" } });
  }
};

const patientFirstName = ref("");
const patientLastName = ref("");

onMounted(() => {
  fetchReceptions();
  const patientData = localStorage.getItem("selectedPatient");
  if (patientData) {
    const patient = JSON.parse(patientData);
    patientFirstName.value = patient.patient_u_name;
    patientLastName.value = patient.patient_last_name;
  }
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
      <div class="w-[354px] max-w-full pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="font-semibold text-[18px] leading-[18px] text-[#00B9C2]">
            {{ patientLastName }} {{ patientFirstName }}
          </p>

          <div
            class="w-full h-[124px] bg-[#E5F2FC] rounded-[10px]"
            @click="handlePlannedReceptionsClick"
          >
            <div class="flex justify-between px-[15px] py-[5px] cursor-pointer">
              <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">
                Запланированные
              </p>
              <div
                class="rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center"
              >
                <p
                  class="text-center text-[16px] font-semibold leading-5 text-white"
                >
                  {{ plannedReceptions }}
                </p>
              </div>
            </div>
            <img :src="fourth" class="ml-[15px]" />
          </div>

          <div
            class="w-full h-[124px] bg-[#E5F2FC] rounded-[10px]"
            @click="handleCompletedReceptionsClick"
          >
            <div class="flex justify-between px-[15px] py-[5px] cursor-pointer">
              <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">
                Завершенные
              </p>
              <div
                class="rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center"
              >
                <p
                  class="text-center text-[16px] font-semibold leading-5 text-white"
                >
                  {{ completedReceptions }}
                </p>
              </div>
            </div>
            <img :src="fifth" class="ml-[15px]" />
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
