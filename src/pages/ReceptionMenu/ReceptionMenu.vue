<script setup lang="ts">
import back from "@assets/icons/back.png";
import first from "@assets/icons/first.png";
import second from "@assets/icons/second.png";
import third from "@assets/icons/third.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();

const patientFirstName = ref("");
const patientLastName = ref("");

onMounted(() => {
  const patientData = localStorage.getItem("selectedPatient");
  if (patientData) {
    const patient = JSON.parse(patientData);
    patientFirstName.value = patient.patient_u_name;
    patientLastName.value = patient.patient_second_name;
  }
});

const goToReceptionMenu2 = () => {
  router.push("/receptionmenu2");
};

const goToChecklist = () => {
  router.push("/checklist");
};

const goToChecklist2 = () => {
  router.push("/checklist2");
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
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="font-semibold text-[18px] leading-[18px] text-[#00B9C2]">
            {{ patientLastName }} {{ patientFirstName }}
          </p>

          <div
            class="w-full h-[124px] bg-[#E5F2FC] rounded-[10px]"
            @click="goToReceptionMenu2"
          >
            <div class="flex justify-between px-[15px] py-[5px] cursor-pointer">
              <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">
                История посещений
              </p>
              <div
                class="rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center"
              >
                <p
                  class="text-center text-[16px] font-semibold leading-5 text-white"
                >
                  6
                </p>
              </div>
            </div>
            <img :src="first" class="ml-[15px]" />
          </div>

          <div
            class="w-full h-[124px] bg-[#E5F2FC] rounded-[10px]"
            @click="goToChecklist2"
          >
            <div class="flex justify-between px-[15px] py-[5px] cursor-pointer">
              <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">
                Анкета
              </p>
              <div
                class="rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center"
              >
                <p
                  class="text-center text-[16px] font-semibold leading-5 text-white"
                >
                  6
                </p>
              </div>
            </div>
            <img :src="second" class="ml-[15px]" />
          </div>

          <div
            class="w-full h-[124px] bg-[#E5F2FC] rounded-[10px]"
            @click="goToChecklist"
          >
            <div class="flex justify-between px-[15px] py-[5px] cursor-pointer">
              <p class="text-[16px] font-semibold leading-6 text-[#00B9C2]">
                Чек-лист
              </p>
              <div
                class="rounded-full border w-[30px] h-[30px] bg-gradient-to-b from-[#006879] to-[#00B9C2] flex justify-center items-center"
              >
                <p
                  class="text-center text-[16px] font-semibold leading-5 text-white"
                >
                  6
                </p>
              </div>
            </div>
            <img :src="third" class="ml-[15px]" />
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
