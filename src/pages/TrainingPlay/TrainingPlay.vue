<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/play1.png'
import photo2 from '@assets/play2.png'
import photo3 from '@assets/play3.png'
import photo4 from '@assets/play4.png'
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
            <div class="flex flex-col gap-[22px] translate-y-[-10px]">
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Онлайн-игра тренажёр</p>
            </div>
            <div class="flex items-center justify-center mt-[40px]">
              <div class="w-[314px] ">
                <div class="flex gap-[43px]">
                  <div>
                    <img :src="photo1"/>
                    <p class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]">Мама с дочкой </p>
                  </div>
                  <div>
                    <img :src="photo2"/>
                    <p class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]">Папа с дочкой  </p>
                  </div>
                </div>
                <div class="flex gap-[43px] mt-[60px]">
                  <div>
                    <img :src="photo3"/>
                    <p class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]">Мама с сыном </p>
                  </div>
                  <div>
                    <img :src="photo4"/>
                    <p class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]">Папа с сыном  </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>









