<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import photo1 from '@assets/child1.svg'
import photo2 from '@assets/child2.svg'
import photo3 from '@assets/child3.svg'
import photo4 from '@assets/child4.svg'
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
            <div class="flex flex-col gap-[22px] translate-y-[-10px]">
                <p class=" font-semibold text-[15px] leading-[18px] text-[#006879]">Ребёнку</p>
            </div>
            <div class="flex flex-col gap-[15px] mt-[30px]">
                <RouterLink to="/video"><div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo1" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Видеоролики</p>
                </div></RouterLink>
                <RouterLink to="/animcinema"><div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo2" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Анимационные фильмы</p>
                </div></RouterLink>
                <RouterLink to="/parents"><div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo3" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Социальные истории</p>
                </div></RouterLink>
                <RouterLink to="/trainingplay"><div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo4" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Онлайн игра-тренажёр</p>
                </div></RouterLink>
            </div>


        </div>
      </div>
    </PagesTemplate>

</template>
