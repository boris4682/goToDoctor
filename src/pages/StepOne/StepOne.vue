<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import { getPollThree } from "@//services/preparation/getPollThree";
import { onMounted, ref } from "vue";
import { DOMEN } from "@//consts";

const doctors = ref();

const getPollThreeHandler = async () => {
  const { data } = await getPollThree();

  if (!data) {
    console.log("Ошибка сервера");
    return;
  }

  doctors.value = data;
};

const router = useRouter();

onMounted(getPollThreeHandler);
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
          <div class="flex justify-center items-center">
            <p class="font-semibold text-[14px] leading-[13px] text-black">
              шаг 1
            </p>
          </div>
          <input type="text" name="search" placeholder="Специалист" />
          <div class="mt-[20px] flex flex-col gap-[18px]">
            <RouterLink
              v-for="item in doctors"
              :key="item.category_id"
              :to="`/steptwo/`"
              ><div
                class="w-full h-[73px] rounded-[13px] border shadow-lg flex px-[12px] py-[10px] gap-[9px]"
              >
                <img
                  class="w-[50px] h-[50px]"
                  :src="`${DOMEN}${item.picture_url}`"
                />
                <p
                  class="font-semibold text-[15px] leading-[18px] text-[#00B9C2]"
                >
                  {{ item.category_name }}
                </p>
              </div></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>

<style>
input[type="text"] {
  width: 364px;
  height: 49px;
  box-sizing: border-box;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  font-size: 19px;
  background-color: white;
  background-image: url("@assets/icons/Magnifier.svg");
  background-position: 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 50px;
}
</style>
