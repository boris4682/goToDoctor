<script setup lang='ts'>
import img from '@assets/Avatar.png'
import fon from '@assets/Fon.png'
import Schedule from '@//components/Schedule/Schedule.vue';
import doc from '@assets/icons/ion_document-sharp.png';
import back from '@assets/icons/back.png'
import setting from '@assets/icons/setting.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';

</script>

<template>
    <PagesTemplate>
      <div class="h-[15vh]">
        <img :src="fon" class="mt-[43px] mx-auto"/>
        
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-95px] translate-x-[-15px] cursor-pointer"/>
        <img :src="img" class=" mx-auto translate-y-[-40px] translate-x-[15px]"/>
        <img :src="setting" class=" mx-auto w-[43px] h-[40px] translate-y-[-90px] translate-x-[15px] cursor-pointer"/>
      </div>
      
      <div class="flex justify-center">
        <div class=" pt-[20px] w-[354px] pb-[20px]">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иван">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иванов">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="Иванович">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="ivanov@mail.ru">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" type="number" placeholder="+ 7 (903) - 465 - 37 - 26">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="ГБУ РО ЦГБ им. Н.А. Семашко">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="неврологической">
          <input class=" w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3" placeholder="невролог">
          <Schedule/>
          <div class="w-full h-[72px] border border-[#00B9C2] rounded-[30px] mt-[29px] flex justify-center items-center gap-1 cursor-pointer">
            <img :src="doc" class="ml-[30px]"/>
            <p class=" text-base font-semibold leading-5 text-[#00B9C2] mr-[35px] text-center">Методические рекомендации для врачей-стоматологов</p>
          </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

