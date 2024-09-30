<script setup lang="ts">
import { ref } from "vue";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { updateInfoReception } from "@/services/reception/updateInfoReception";
import back from "@assets/icons/back.png";
import PagesTemplate from "@/components/shared/PagesTemplate.vue";
import Loader from "@/components/shared/Loader.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { getAppointmentsForDoc } from "@/services/reception/getAppointmentsForDoc";
import { useToast } from "primevue/usetoast";

interface Reception {
  reception_id: string;
  patient_name: string;
  datetime: string;
  first_reception: boolean;
}

const router = useRouter();

const receptions = ref<Reception[]>([]);
const isLoading = ref(false);

const displayDialog = ref(false);
const selectedReceptionId = ref<string | null>(null);

const complaints = ref("");
const diagnosis = ref("");
const doctorOpinion = ref("");
const doctorRecommendations = ref("");
const isComplited = ref(false);

const userData = JSON.parse(localStorage.getItem("userData") ?? "");
const token = userData?.auth_token;

const doctorsCategory = ref([
  {
    category_id: "current",
    name: "Текущий месяц",
  },
  {
    category_id: "prev",
    name: "Предыдущий месяц",
  },
  {
    category_id: "next",
    name: "Следующий месяц",
  },
]);

const fetchAppointmentsData = async (month: string) => {
  isLoading.value = true;
  try {
    const { data } = await getAppointmentsForDoc({ token, month });
    receptions.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
const openDialog = (receptionId: string) => {
  selectedReceptionId.value = receptionId;
  displayDialog.value = true;
};

const resetForm = () => {
  complaints.value = "";
  diagnosis.value = "";
  doctorOpinion.value = "";
  doctorRecommendations.value = "";
  isComplited.value = false;
  displayDialog.value = false;
};

const toast = useToast();

const submitForm = async () => {
  if (selectedReceptionId.value) {
    const data = {
      token,
      receptionId: selectedReceptionId.value,
      complaints: complaints.value,
      diagnosis: diagnosis.value,
      doctorOpinion: doctorOpinion.value,
      doctorRecommendations: doctorRecommendations.value,
      isComplited: isComplited.value ? "1" : "0",
    };

    try {
      const response = await updateInfoReception(data);
      if (response.status === 200 && response.data.success) {
        toast.add({
          severity: "success",
          summary: "Успех",
          detail: "Информация о приеме успешно обновлена",
          life: 3000,
        });
        resetForm();
      } else {
        toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: "Не удалось обновить информацию о приеме",
          life: 3000,
        });
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      toast.add({
        severity: "error",
        summary: "Ошибка",
        detail: "Произошла ошибка при обновлении информации",
        life: 3000,
      });
    }
  }
};

onMounted(() => {
  fetchAppointmentsData("current");
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

    <div class="flex gap-5 overflow-auto py-2">
      <div
        class="min-w-[70vw] h-[47px] rounded-[28px] bg-[#E5F2FC] mt-[28px] flex items-center justify-center gap-[12px] cursor-pointer"
        v-for="(item, index) in doctorsCategory"
        @click="() => fetchAppointmentsData(item.category_id)"
        :key="index"
      >
        <p class="font-semibold text-[14px] leading-6 text-[#000000]">
          {{ item.name }}
        </p>
      </div>
    </div>

    <div v-if="isLoading" class="flex justify-center mt-5">
      <Loader />
    </div>
    <div
      v-if="receptions.length"
      class="flex justify-center items-center mt-[34px]"
    >
      <div class="w-[361px] rounded-[14px] border shadow-lg gap-[px]">
        <div class="py-[16px] px-[17px]">
          <div
            v-for="(item, index) in receptions"
            :key="index"
            class="mb-[10px] p-[10px] bg-[#E5F2FC] rounded-[10px] cursor-pointer"
            @click="openDialog(item.reception_id)"
          >
            <p class="text-[#006879] text-lg font-bold">
              {{ item.patient_name }}
            </p>
            <p class="text-[#A4A5A5] text-sm">
              Время приема: {{ item.datetime }}
            </p>
            <p class="text-[#A4A5A5] text-sm">
              Прием: {{ item.first_reception ? "Первичный" : "Повторный" }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <Dialog
      header="Прием пациента"
      v-model:visible="displayDialog"
      :modal="true"
      :closable="false"
      :style="{ width: '450px' }"
    >
      <div class="p-fluid">
        <div class="field">
          <p for="complaints">Жалобы пациента</p>
          <Textarea
            id="complaints"
            v-model="complaints"
            placeholder="Введите жалобы"
            rows="1"
            autoResize
            class="w-full"
          />
        </div>

        <div class="field">
          <p for="diagnosis">Диагноз доктора</p>
          <Textarea
            id="diagnosis"
            v-model="diagnosis"
            placeholder="Введите диагноз"
            rows="1"
            autoResize
            class="w-full"
          />
        </div>

        <div class="field">
          <p for="doctorOpinion">Мнение врача</p>
          <Textarea
            id="doctorOpinion"
            v-model="doctorOpinion"
            placeholder="Введите мнение врача"
            rows="1"
            autoResize
            class="w-full"
          />
        </div>

        <div class="field">
          <p for="doctorRecommendations">Рекомендации врача</p>
          <Textarea
            id="doctorRecommendations"
            v-model="doctorRecommendations"
            placeholder="Введите рекомендации"
            rows="1"
            autoResize
            class="w-full"
          />
        </div>

        <div class="field-checkbox">
          <Checkbox v-model="isComplited" />
          <label for="isComplited" class="ml-2">Закрыть прием</label>
        </div>

        <div class="flex space-between mt-4">
          <Button
            label="Сохранить"
            class="p-button-success w-[50%]"
            @click="submitForm"
          />
          <Button
            label="Отмена"
            class="p-button-secondary ml-2 w-[50%]"
            @click="resetForm"
          />
        </div>
      </div>
    </Dialog>
  </PagesTemplate>
</template>

<style scoped>
.field {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
