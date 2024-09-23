<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter, useRoute } from "vue-router";
import Loader from "@//components/shared/Loader.vue";

import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import { getPreparationPollData } from "@//services/preparation/getPreparationPollData";
import { saveAnswers } from "@//services/preparation/saveAnswers";

const router = useRouter();
const route = useRoute();

const blockQuestions = ref({});

const checkListName = ref("");
const loading = ref(true);
onMounted(() => {
  const patientSecondName = localStorage.getItem("Patient_second_name");
  const patientUName = localStorage.getItem("Patient_u_name");

  patientName.value = `${patientSecondName} ${patientUName}`;

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  currentDate.value = `${day}.${month}.${year}`;

  getPreparationPollData(+route.params.id)
    .then((data) => {
      if (data.status != 200) return;

      checkListName.value = data.data.name;

      const questions = data.data.questions.map((q) => {
        const fields = {};
        q.fields.forEach((field) => {
          fields[field.weight] = field.id;
        });

        return {
          text: q.text,
          id: q.id,
          fields,
          selected: null,
          block_number: q.block_number,
        };
      });

      blockQuestions.value = {};
      questions.forEach((q) => {
        if (!blockQuestions.value[q.block_number])
          blockQuestions.value[q.block_number] = [];

        blockQuestions.value[q.block_number].push(q);
      });
    })
    .finally(() => {
      loading.value = false;
    });
});

const patientName = ref("");
const currentDate = ref("");

const getNumberRow = (index: number, block: number) => {
  let res = index + 1;
  for (let i = 1; i < block; i++) res += blockQuestions.value[i].length;

  return res;
};

const selectedBlock = ref(1);

const resultsTable = computed(() => {
  const resultsAnswer = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };
  for (let id in blockQuestions.value) {
    blockQuestions.value[id].forEach((q) => {
      for (let i = 0; i <= 2; i++) {
        if (q.fields[i] == q.selected) resultsAnswer[id] += i;
      }
    });
  }

  let total = 0;
  for (let id in resultsAnswer) {
    total += resultsAnswer[id];
  }

  return [
    {
      index: "1 блок",
      name: "Сопутствующие универсальные навыки",
      res: resultsAnswer[1],
    },
    {
      index: "2 блок",
      name:
        "Готовность сесть в кресло, надеть салфетку и наблюдать за работой стоматологических инструментов и приборов",
      res: resultsAnswer[2],
    },
    {
      index: "3 блок",
      name:
        "Готовность к манипуляциям с инструментами и приборами вне полости рта (рука, щека)",
      res: resultsAnswer[3],
    },
    {
      index: "4 блок",
      name:
        "Готовность спокойно воспринимать манипуляции стоматологическими инструментами и приборами в полости рта",
      res: resultsAnswer[4],
    },
    {
      index: "",
      name: "Общая сумма баллов",
      res: total,
    },
  ];
});

const loadingForm = ref(false);
const sendForm = () => {
  loadingForm.value = true;

  const answers = {};
  for (let id in blockQuestions.value) {
    blockQuestions.value[id].map((q) => {
      answers[q.id] = q.selected;
    });
  }
  const patientId = localStorage.getItem("selectedPatientId");
  const data = {
    answers,
    voteId: route.params.id,
    isWeight: true,
    patientId: patientId,
  };
  console.log(data);

  saveAnswers(data).finally(() => {
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
          <div class="flex gap-[15px] justify-between items-end">
            <h3 class="text-[rgb(0,104,121)] text-[16px] font-semibold">
              {{ checkListName }}
            </h3>
            <p class="text-[rgb(0,185,194)] text-[16px]">{{ currentDate }}</p>
          </div>
        </div>
      </div>

      <div v-for="(questions, id) in blockQuestions" :key="id">
        <DataTable :value="questions" v-if="selectedBlock == id">
          <Column field="index" header="№" class="text-[12px]">
            <template #body="{ index }">{{ getNumberRow(index, id) }}</template>
          </Column>
          <Column field="text" header="Действие" class="text-[12px]"></Column>
          <Column field="field2" header="2б">
            <template #body="{ data }">
              <RadioButton v-model="data.selected" :value="data.fields[2]" />
            </template>
          </Column>
          <Column field="field1" header="1б">
            <template #body="{ data }">
              <RadioButton v-model="data.selected" :value="data.fields[1]" />
            </template>
          </Column>
          <Column field="field0" header="0б">
            <template #body="{ data }">
              <RadioButton v-model="data.selected" :value="data.fields[0]" />
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="paginate">
        <div
          v-for="(questions, id) in blockQuestions"
          :key="id"
          class="paginate__item"
          :class="{ active: selectedBlock == id }"
          @click="selectedBlock = id"
        ></div>
      </div>

      <div class="results w-[354px] mx-auto">
        <h4 class="text-[16px] text-[rgb(0,185,194)]">
          Итоги по каждому блоку действий
        </h4>

        <DataTable :value="resultsTable">
          <Column field="index" class="text-[12px] font-bold"></Column>
          <Column field="name" class="text-[12px]">
            <template #body="{ data }">
              <span
                :class="{
                  'text-[rgb(0,104,121)] text-[16px]': data.index == '',
                }"
              >
                {{ data.name }}
              </span>
            </template>
          </Column>
          <Column field="res"></Column>
        </DataTable>
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
