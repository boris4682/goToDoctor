<script setup lang="ts">
defineProps({
  doctorId: Number,
  doctorSpecialization: String,
  doctorClinic: String,
  doctorName: String,
  datetime: String,
});
</script>

<template>
  <router-link
      :to="'/treatment2/' + doctorId"
    class="w-full h-[153px] shadow-xl border rounded-xl bg-[#F3F9FE] relative mb-5"
  >
    <div class="flex flex-col justify-around h-full p-4">
      <h6 class="font-semibold text-[24px] leading-6 text-[#00B9C2]">
        {{ doctorSpecialization }}
      </h6>
      <p class="font-medium text-base leading-5 text-[#323232]">
        {{ doctorClinic }}
      </p>
      <p class="font-medium text-sm leading-4 text-[#A3A3A3] mt-4">
        {{ doctorName }}
      </p>
    </div>
    <div class="absolute bottom-2 right-4">
      <p class="font-medium text-sm leading-4 text-[#A3A3A3]">
        {{ new Date(datetime!).toLocaleDateString() }}
      </p>
    </div>
  </router-link>
</template>
