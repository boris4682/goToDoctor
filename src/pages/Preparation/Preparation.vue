<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getType } from "@//services/preparation/getType";
import { DOMEN } from "@//consts";

const router = useRouter();
const { id } = useRoute().params;

const appointment = ref();

const getTypeHandler = async () => {
  const { data } = await getType(id);

  if (!data) {
    console.log("Ошибка сервера");
    return;
  }

  appointment.value = data;
};

onMounted(getTypeHandler);
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
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Приём
          </p>
        </div>
        <RouterLink
          v-for="item in appointment"
          :key="item.category_id"
          :to="`/whowillgo/${item.category_id}`"
          ><div
            class="w-full flex justify-center items-center gap-[40px] mt-[24px]"
          >
            <img
              class="w-[124px] h-[124px]"
              :src="`${DOMEN}${item.picture_url}`"
            />
            <p class="font-semibold text-[20px] leading-[24px] text-[#016368]">
              {{ item.type_name }}
            </p>
          </div></RouterLink
        >
      </div>
    </div>
  </PagesTemplate>
</template>
