<script setup lang="ts">
import back from "@assets/icons/back.png";
import OnePatient from "@//components/OnePatient/OnePatient.vue";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPatients, IPatient } from "@//services/patients/getPatients";

const patients = ref<IPatient[]>();

// получение токена
const user = JSON.parse(localStorage.getItem("userData") ?? "");
const token = user?.auth_token;

const getPatientsHandler = async () => {
  const { data } = await getPatients(token);

  if (!data) {
    console.log("Ошибка сервера");
    return;
  }

  patients.value = data;
};

const router = useRouter();

onMounted(getPatientsHandler);
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
            Кого записать к специалисту?
          </p>
        </div>
        <div class="mt-[26px]">
          <RouterLink
            to="/stepthree"
            v-for="item in patients"
            :key="item.patient_id"
          >
            <OnePatient
              v-bind:img="item.photo"
              v-bind:patient_last_name="item.patient_last_name"
              v-bind:patient_u_name="item.patient_u_name"
              v-bind:patient_phone="item.patient_phone"
            />
          </RouterLink>
          <!-- <OnePatient />
          <OnePatient /> -->
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
