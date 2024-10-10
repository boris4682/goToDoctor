<script setup lang='ts'>
import back from '@assets/icons/back.png'
import OneRecord from '@//components/OneRecord/OneRecord.vue';
import Search from '@//components/Search/Search.vue';
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
        <div class=" w-[354px] max-w-full pb-[20px]">

          <Search class=" translate-y-[-30px] z-50"/>
          <div class="mt-[26px]">
            <OneRecord/>
            <OneRecord/>
            <OneRecord/>
          </div>

        </div>

      </div>
    </PagesTemplate>

</template>
