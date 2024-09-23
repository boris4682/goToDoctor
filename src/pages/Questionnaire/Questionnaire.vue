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

const router = useRouter();
const route = useRoute();

const blockQuestions = ref({});

const toast = useToast();

const checkListName = ref("");
const loading = ref(true);
onMounted(() => {
  getPreparationPollData(+route.params.id)
    .then((data) => {
      console.log(data);
      if (data.status != 200) return;

      checkListName.value = data.data.name;

      blockQuestions.value = {};
      data.data.questions.forEach((q) => {
        const bn = q.block_number ?? 1;
        if (!blockQuestions.value[bn]) blockQuestions.value[bn] = [];

        blockQuestions.value[bn].push({ ...q, answer: null });
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
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Сохранено!",
        detail: "Опрос успешно сохранен",
        life: 3000,
      });
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
            Пономаренко Ольга
          </p>
          <div class="flex gap-[15px] justify-between items-end">
            <h3 class="text-[rgb(0,104,121)] text-[16px] font-semibold">
              {{ checkListName }}
            </h3>
            <p class="text-[rgb(0,185,194)] text-[16px]">20.02.2024</p>
          </div>
        </div>
      </div>

      <div v-for="(questions, id) in blockQuestions" :key="id">
        <Question
          v-if="selectedBlock == id"
          v-for="question in questions"
          :key="question.id"
          :question="question"
          v-model:answer="question.answer"
        />
      </div>

      <div v-if="blockQuestions[2]" class="paginate">
        <div
          v-for="(questions, id) in blockQuestions"
          :key="id"
          class="paginate__item"
          :class="{ active: selectedBlock == id }"
          @click="selectedBlock = id"
        ></div>
      </div>

      <div class="text-center px-[10px]">
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
  </PagesTemplate>
</template>

<style scoped>
.paginate {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.paginate__item {
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
  width: 7px;
  height: 7px;
  cursor: pointer;
}
.paginate__item.active {
  background-color: rgba(0, 185, 194, 1);
}
</style>
