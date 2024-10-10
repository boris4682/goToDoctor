<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter, useRoute } from "vue-router";
import Loader from "@//components/shared/Loader.vue";
import Question from "@//components/Question";

import Button from "primevue/button";
import { useToast } from "primevue/usetoast";

import { getPreparationPollData } from "@//services/preparation/getPreparationPollData";
import { saveAnswers } from "@//services/preparation/saveAnswers";
import { getVoteInfo } from "@/services/preparation/getVoteInfo";

const router = useRouter();
const route = useRoute();

const blockQuestions = ref({});

const toast = useToast();

const patientName = ref("");
const currentDate = ref("");

const voteInfo = ref();
const isError = ref(false);
const fetchVoteInfo = async () => {
  const token = JSON.parse(localStorage.userData).auth_token;
  const params = {
    token,
    patientId: route.params.patientId as string,
    voteId: route.params.id as string,
  };
  return getVoteInfo(params)
    .then(({ data, status }) => {
      if (status != 200) {
        isError.value = true;
        return;
      }
      voteInfo.value = data;
    })
    .catch(() => {
      isError.value = true;
    });
};

const userData = ref();
const checkListName = ref("");
const loading = ref(true);
onMounted(async () => {
  const patientSecondName = localStorage.getItem("Patient_last_name");
  const patientUName = localStorage.getItem("Patient_u_name");
  patientName.value = `${patientSecondName} ${patientUName}`;

  userData.value = JSON.parse(localStorage.userData ?? "{}");

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  currentDate.value = `${day}.${month}.${year}`;

  if (route.params.patientId) {
    await fetchVoteInfo();

    if (!isError.value) {
      currentDate.value = voteInfo.value.date_pass;
      patientName.value = voteInfo.value.patient_name;
    }
  }

  console.log(voteInfo.value);

  getPreparationPollData(+route.params.id)
    .then((data) => {
      console.log(data);
      if (data.status != 200) return;

      checkListName.value = data.data.name;

      blockQuestions.value = {};
      data.data.questions.forEach((q) => {
        const bn = q.block_number ?? 1;
        if (!blockQuestions.value[bn]) blockQuestions.value[bn] = [];

        let answer = null;
        if (!!voteInfo.value) {
          answer = voteInfo.value.answers[q.id];
        }

        blockQuestions.value[bn].push({
          ...q,
          answer,
        });
      });
    })
    .finally(() => {
      loading.value = false;
    });
});

const selectedBlock = ref(1);

const loadingForm = ref(false);
const sendForm = () => {
  loadingForm.value = true;

  const answers = {};
  for (let id in blockQuestions.value) {
    blockQuestions.value[id].map((q) => {
      answers[q.id] = q.answer;
    });
  }
  const patientId = localStorage.getItem("selectedPatientId");
  const data = {
    answers: JSON.stringify(answers),
    voteId: route.params.id,
    isWeight: false,
    patientId: patientId,
  };
  console.log(data);

  saveAnswers(data)
    .then(({ data: res }) => {
      if (res.success) {
        toast.add({
          severity: "success",
          summary: "Сохранено!",
          detail: "Опрос успешно сохранен",
          life: 3000,
        });
      } else {
        toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: res.data,
          life: 3000,
        });
      }
    })
    .finally(() => {
      loadingForm.value = false;
    });
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

    <Loader v-if="loading" />

    <div v-else class="pb-[30px]">
      <div class="w-[354px] pb-[20px] mx-auto">
        <div class="flex flex-col gap-[30px] translate-y-[-10px]">
          <p class="font-semibold text-[18px] leading-[18px] text-[#00B9C2]">
            {{ patientName }}
          </p>
          <div
            v-if="!isError"
            class="flex gap-[15px] justify-between items-end"
          >
            <h3 class="text-[rgb(0,104,121)] text-[16px] font-semibold">
              {{ checkListName }}
            </h3>
            <p class="text-[rgb(0,185,194)] text-[16px]">{{ currentDate }}</p>
          </div>
        </div>
      </div>

      <p v-if="isError && userData.isDoctor" class="text-center">
        Анкета не заполнена
      </p>

      <div v-else>
        <div v-for="(questions, id) in blockQuestions" :key="id">
          <Question
            v-if="selectedBlock == id"
            v-for="question in questions"
            :key="question.id"
            :question="question"
            :disabled="!!voteInfo"
            v-model:answer="question.answer"
          />
        </div>

        <div v-if="blockQuestions[2]" class="paginate">
          <div
            v-for="(_questions, id) in blockQuestions"
            :key="id"
            class="paginate__item"
            :class="{ active: selectedBlock == id }"
            @click="selectedBlock = id"
          ></div>
        </div>

        <div v-if="!voteInfo" class="text-center px-[10px]">
          <Button
            type="button"
            :loading="loadingForm"
            @click="sendForm"
            class="mt-[15px] w-full"
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>

<style scoped>
.paginate {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.paginate__item {
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.paginate__item.active {
  background-color: rgba(0, 185, 194, 1);
}
</style>
