<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import photo1 from "@assets/par21.svg";
import photo2 from "@assets/par22.svg";
import photo3 from "@assets/par23.svg";
import photo4 from "@assets/par24.svg";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import OnePatient from "@//components/OnePatient/OnePatient.vue";
import { getPatients, IPatient } from "@//services/patients/getPatients";
import Dialog from "primevue/dialog";

const router = useRouter();
const recommendationUrl = ref<string | null>(null);
const selectedAction = ref<string | null>(null);
const patients = ref<IPatient[]>([]);
const isLoading = ref(true);
const showModal = ref(false);
const token = JSON.parse(localStorage.getItem("userData") ?? "")?.auth_token;

onMounted(() => {
  const storedPerson = localStorage.getItem("selectedPerson");
  if (storedPerson) {
    const person = JSON.parse(storedPerson);
    recommendationUrl.value = `https://idykvrachy.ru${person.uf_recomendations}`;
  }
});

const openRecommendation = () => {
  if (recommendationUrl.value) {
    window.open(recommendationUrl.value, "_blank");
  } else {
    console.log("Рекомендации не найдены");
  }
};

const getPatientsHandler = async () => {
  const { data } = await getPatients(token);

  if (!data) {
    console.log("Ошибка сервера");
    isLoading.value = false;
    return;
  }

  patients.value = data;
  isLoading.value = false;
};

const openModal = (action) => {
  selectedAction.value = action;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const selectPatientAndGo = (patient) => {
  const storedPerson = localStorage.getItem("selectedPerson");

  if (storedPerson) {
    const person = JSON.parse(storedPerson);
    const ufVoteId = person.uf_vote_id;
    const ufChecklistId = person.uf_check_list;
    localStorage.setItem("selectedPatientId", patient.patient_id);
    localStorage.setItem("Patient_last_name", patient.patient_last_name);
    localStorage.setItem("Patient_u_name", patient.patient_u_name);
    const destination =
      selectedAction.value === "questionnaire"
        ? `/questionnaire/${ufVoteId}/${patient.patient_id}`
        : `/checklist-form/${ufChecklistId}/${patient.patient_id}`;

    router.push(destination);
  } else {
    console.error("Пациент не найден в sessionStorage");
  }
};

onMounted(() => {
  getPatientsHandler();
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
          <p class="text-[20px] font-semibold leading-[18px] text-[#006879]">
            Родитель
          </p>
        </div>
        <div class="flex flex-col gap-[15px] mt-[30px]">
          <div
            class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center cursor-pointer"
            @click="openRecommendation"
          >
            <img :src="photo1" class="w-[81px] h-[71px] ml-[26px]" />
            <p
              class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]"
            >
              Рекомендации
            </p>
          </div>

          <div
            class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center cursor-pointer"
            @click="openModal('questionnaire')"
          >
            <img :src="photo2" class="w-[81px] h-[71px] ml-[26px]" />
            <p
              class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]"
            >
              Анкета
            </p>
          </div>

          <div
            class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center cursor-pointer"
            @click="openModal('checklist')"
          >
            <img :src="photo3" class="w-[81px] h-[71px] ml-[26px]" />
            <p
              class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]"
            >
              Чек-лист
            </p>
          </div>

          <div
            class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center"
            @click="router.push(`/appointmentwithspecialist`)"
          >
            <img :src="photo4" class="w-[81px] h-[71px] ml-[26px]" />
            <p
              class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]"
            >
              Записаться
            </p>
          </div>
        </div>
      </div>
    </div>

    <Dialog v-model:visible="showModal" modal class="w-[90%]">
      <template v-if="isLoading">
        <Loader />
      </template>

      <template v-else>
        <div v-if="patients && patients.length > 0">
          <div
            v-for="item in patients"
            :key="item.patient_id"
            @click="selectPatientAndGo(item)"
          >
            <OnePatient
              v-bind:img="item.photo"
              v-bind:patient_last_name="item.patient_last_name"
              v-bind:patient_u_name="item.patient_u_name"
              v-bind:patient_phone="item.patient_phone"
            />
          </div>
        </div>
        <div v-else class="text-center">
          <p class="text-center text-gray-500 pt-[50px]">
            Нет пациентов для приема. Хотите добавить пациента?
          </p>
          <RouterLink to="/lcchild">
            <div
              class="w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center mt-[34px] cursor-pointer"
            >
              <p class="text-[20px] leading-[24px] font-bold text-white">
                Добавить
              </p>
            </div>
          </RouterLink>
        </div>
      </template>

      <template #footer>
        <button
          @click="closeModal"
          class="p-button p-component p-button-danger"
        >
          Закрыть
        </button>
      </template>
    </Dialog>
  </PagesTemplate>
</template>
