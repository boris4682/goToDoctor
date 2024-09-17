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
          <p class="text-[20px] font-semibold leading-[18px] text-[#006879]">Ребёнку</p>
        </div>
        <div class="flex flex-col gap-[15px] mt-[30px]">
          <div v-for="(item, index) in sections" :key="index" class="w-full rounded-2xl shadow-xl border-2 border-gray-300 flex pl-[26px] gap-[27px] py-[15px]">
            <img :src="item.img" />
            <p class="text-[#00B9C2] text-xl max-w-[210px] font-semibold">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>

<script setup lang="ts">

import back from '@assets/icons/back.png'
import PagesTemplate from "@shared/PagesTemplate.vue";
import {getPreparationPollData} from "../services/preparation/getPreparationPollData.ts";
import {usePreparationsStore} from "../services/preparation/preparationsStore.ts";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const preparationsStore = usePreparationsStore()
const router = useRouter()

const fetchPollData = async() => {
  const {status, data } = await getPreparationPollData(preparationsStore.checklist);

}

onMounted(fetchPollData)
</script>

<style scoped>

</style>