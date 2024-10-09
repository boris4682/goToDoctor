<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter, useRoute } from "vue-router";
import Loader from "@//components/shared/Loader.vue";
import { useToast } from "primevue/usetoast";
import RadioButton from "primevue/radiobutton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import { getChecklistInfo } from "@//services/preparation/getChecklistInfo";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const blockQuestions = ref({});
const checkListName = ref("");
const loading = ref(true);

const token = JSON.parse(localStorage.getItem("userData") ?? "{}")?.auth_token;
const selectedPatient = JSON.parse(
  localStorage.getItem("selectedPatient") ?? "{}"
);
const patientId = selectedPatient?.patient_id ?? "";
const voteId = 2;

const patientName = ref("");
const currentDate = ref("");

onMounted(() => {
  getChecklistInfo({ token, patientId, voteId })
    .then((response) => {
      if (response.status !== 200 || !response.data) {
        toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: "Данные не получены",
          life: 3000,
        });
        return;
      }

      const data = response.data;
      checkListName.value = data.vote_name;
      patientName.value = data.patient_name;
      currentDate.value = data.date_pass;

      if (data.vote_data_blocks && data.answers) {
        const questions = Object.entries(data.answers).map(
          ([questionId, answerId]) => ({
            questionId,
            answerId,
          })
        );

        blockQuestions.value = {};
        data.vote_data_blocks.forEach((block) => {
          blockQuestions.value[block.block] = questions;
        });
      } else {
        toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: "Недостаточно данных",
          life: 3000,
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
});

const getNumberRow = (index: number, block: number) => {
  let res = index + 1;
  for (let i = 1; i < block; i++) res += blockQuestions.value[i]?.length || 0;
  return res;
};

const selectedBlock = ref(1);

const resultsTable = computed(() => {
  const results = [];

  for (const block of Object.keys(blockQuestions.value)) {
    const totalScore =
      blockQuestions.value[block]?.reduce(
        (sum, q) => sum + parseInt(q.answerId),
        0
      ) || 0;
    results.push({
      block: `${block} блок`,
      name: `Блок ${block}`,
      score: totalScore,
    });
  }

  return results;
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

    <Loader v-if="loading" />

    <div v-else class="pb-[30px]">
      <div class="w-[354px] max-w-full pb-[20px] mx-auto">
        <div class="flex flex-col gap-[30px] translate-y-[-10px]">
          <p class="font-semibold text-[18px] leading-[18px] text-[#00B9C2]">
            {{ patientName }}
          </p>
          <div class="flex gap-[15px] justify-between items-end">
            <h3 class="text-[rgb(0,104,121)] text-[16px] font-semibold">
              {{ checkListName }}
            </h3>
            <p class="text-[rgb(0,185,194)] text-[16px]">{{ currentDate }}</p>
          </div>
        </div>
      </div>
      <div v-for="(questions, block) in blockQuestions" :key="block">
        <DataTable :value="questions" v-if="selectedBlock == block">
          <Column field="index" header="№" class="text-[12px]">
            <template #body="{ index }">{{
              getNumberRow(index, block)
            }}</template>
          </Column>
          <Column
            field="questionId"
            header="ID вопроса"
            class="text-[12px]"
          ></Column>
          <Column
            field="answerId"
            header="ID ответа"
            class="text-[12px]"
          ></Column>
        </DataTable>
      </div>

      <!-- Пагинация по блокам -->
      <div class="paginate">
        <div
          v-for="block in Object.keys(blockQuestions)"
          :key="block"
          class="paginate__item"
          :class="{ active: selectedBlock == block }"
          @click="selectedBlock = block"
        ></div>
      </div>

      <div class="results w-[354px] max-w-full mx-auto">
        <h4 class="text-[16px] text-[rgb(0,185,194)]">
          Итоги по каждому блоку действий
        </h4>

        <DataTable :value="resultsTable">
          <Column field="block" class="text-[12px] font-bold"></Column>
          <Column field="name" class="text-[12px]"></Column>
          <Column
            field="score"
            header="Сумма баллов"
            class="text-[12px]"
          ></Column>
        </DataTable>
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
