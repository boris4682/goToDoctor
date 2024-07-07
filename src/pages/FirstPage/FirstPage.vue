<script setup lang='ts'>
import { Slider } from '@components/FirstPage/Slider'
import MainTemplate from '@components/shared/MainTemplate.vue'
import arrow from '@assets/icons/arrow.svg'
</script>
<template>
  <MainTemplate>
    <div class="px-4">
      <div class="bg-main w-36 py-1 px-2 text-white flex justify-between items-center rounded-md">
        <p>
          Регион
        </p>
        <img :src="arrow"/>
      </div>
      <Slider />
      <div class="flex flex-col gap-2 mt-2">
        <RouterLink to="/reg">
          <button class=" bg-main text-white w-[70%] mx-auto h-[55px] rounded-full block ">Регистрация</button>
        </RouterLink>
        <button class=" bg-main text-white w-[70%] mx-auto h-[55px] rounded-full block ">Войти</button>
      </div>
      
    </div>
    
  </MainTemplate>
</template>
<style lang='scss'></style>