<script setup lang='ts'>
import MainTemplate from '@//components/shared/MainTemplate.vue';
import img from '@assets/secondSlide.png'
</script>
<template>
  <MainTemplate>
    <div class="px-4">
      <img :src="img" class="w-[225px] h-[248px] mx-auto"/>
    </div>
  </MainTemplate>
  <h3 class="flex text-lg font-semibold leading-5 text-[#006879] justify-center mt-9">Регистрация</h3>
  <div class="flex justify-center">
    <div class=" pt-[66px] w-[290px] pb-[40px]">
      <div class="flex justify-between">
        <div class=" bg-[#E5F2FC] w-[125px] h-[57px] flex justify-center items-center rounded-[7px] cursor-pointer hover:bg-[#00B9C2] duration-300">
          <p>Пациент</p>
        </div>
        <div class=" bg-[#E5F2FC] w-[125px] h-[57px] flex justify-center items-center rounded-[7px] cursor-pointer hover:bg-[#00B9C2] duration-300">
          <p>Врач</p>
        </div>
      </div>
      <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Имя">
      <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Адрес эл. почты">
      <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" type="number" placeholder="+ 7 (____) - _______ - ____ - ____">
      <p class=" text-center text-[7px] leading-[10px] text-[#666666] mt-[18px] pb-[20px]">Нажимая кнопку “Продолжить” я принимаю <u class=" cursor-pointer">Пользовательское<br>соглашение</u> и даю согласие на <u class=" cursor-pointer">обработку персональных данных</u></p>
      <div class="w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center">
        <p class="text-[20px] leading-[24px] font-bold text-white cursor-pointer">Продолжить</p>
      </div>
    </div>

  </div>
</template>
<style lang='scss'></style>