<script setup lang='ts'>
import back from '@assets/icons/back.png'
import OnePatient from '@//components/OnePatient/OnePatient.vue';
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer" @click="router.back()"/>
      </div>
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex justify-center items-center">
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Кого записать к специалисту?</p>
            </div>
          <div class="mt-[26px]">
            <OnePatient/>
            <OnePatient/>
          </div>
        </div>
      </div>
    </PagesTemplate>
</template>

