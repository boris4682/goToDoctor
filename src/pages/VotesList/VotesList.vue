<script setup lang="ts">
import back from '@assets/icons/back.png'
import PagesTemplate from "@/components/shared/PagesTemplate.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {getPatientVotes} from "@/services/preparation/getPatientVotes.ts";

const router = useRouter()

const votes = ref([]);
const fetchVotes = () => {
  getPatientVotes().then(({ data, status }) => {
    if (status != 200) return;

    const patientData = JSON.parse(localStorage.selectedPatient ?? '{}');
    votes.value = data.filter((item: any) => item.vote_patient_id == patientData.patient_id);
  })
}

const patientName = ref('');
onMounted(() => {
  fetchVotes();

  const patientData = localStorage.getItem("selectedPatient");
  if (patientData) {
    const patient = JSON.parse(patientData);
    patientName.value = `${patient.patient_last_name} ${patient.patient_u_name}`;
  }
});
</script>

<template>
  <PagesTemplate class=" pb-[80px]">
    <div class="h-[15vh]">
    </div>
    <div class="flex">
      <img :src="back" class=" mx-auto w-[11px]  h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer" @click="router.back()"/>
    </div>
    <div class="flex justify-center">
      <div class=" w-[354px] pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="text-[20px] font-semibold leading-[18px] text-[#006879]">{{ patientName }}</p>
        </div>
        <div class="flex flex-col gap-[15px] mt-[30px]">
          <router-link
              v-for="(item, index) in votes"
              :key="index" :to="`/questionnaire/${item.id_vote}/${item.vote_patient_id}`"
              class="w-full rounded-2xl shadow border border-gray-300 flex pl-[26px] gap-[27px] py-[15px]"
          >
            <p class="text-[#00B9C2] text-l font-semibold">{{item.vote_name}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>

<style scoped>

</style>
