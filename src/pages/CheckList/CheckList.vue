<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import Search2 from '@//components/Search2/Search2.vue';
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
                <p class=" font-semibold text-[18px] leading-[18px] text-[#00B9C2]">Пономаренко Ольга</p>
                <div class="flex gap-[15px] justify-center items-center">
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">12.04.2024</p>
                    <p class=" font-semibold text-sm leading-5 text-[#979797]">9:00</p>
                    <button class=" ml-[10px] w-[211px] h-[28px] rounded-[12px] border shadow-xl text-[#006879]">Посмотреть мой приём</button>
                </div>
                <Search2/>
                <div class="mt-[26px] flex flex-col gap-[28px]">
                    <RouterLink to="/treatment"><div class="flex flex-col bg-[#F3F9FE] w-full h-[124px] rounded-[10px]">
                        <div class=" my-[20px] mx-[20px]">
                            <h4 class=" font-semibold text-xl leading-[24px] text-[#00B9C2]">Стоматолог терапевт</h4>
                            <p class="mt-[8px] font-medium text-sm leading-[17px] text-[#2C3E4F]">Адаптационный приём</p>
                            <div class="flex justify-between mt-[12px]">
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">Современная медицина</p>
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">20.01.2024</p>
                            </div>
                        </div>
                      </div></RouterLink>
                      <RouterLink to="/treatment"><div class="flex flex-col bg-[#F3F9FE] w-full h-[124px] rounded-[10px]">
                        <div class=" my-[20px] mx-[20px]">
                            <h4 class=" font-semibold text-xl leading-[24px] text-[#00B9C2]">Стоматолог терапевт</h4>
                            <p class="mt-[8px] font-medium text-sm leading-[17px] text-[#2C3E4F]">Адаптационный приём</p>
                            <div class="flex justify-between mt-[12px]">
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">Современная медицина</p>
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">20.01.2024</p>
                            </div>
                        </div>
                      </div></RouterLink>
                      <RouterLink to="/treatment"><div class="flex flex-col bg-[#F3F9FE] w-full h-[124px] rounded-[10px]">
                        <div class=" my-[20px] mx-[20px]">
                            <h4 class=" font-semibold text-xl leading-[24px] text-[#00B9C2]">Стоматолог терапевт</h4>
                            <p class="mt-[8px] font-medium text-sm leading-[17px] text-[#2C3E4F]">Адаптационный приём</p>
                            <div class="flex justify-between mt-[12px]">
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">Современная медицина</p>
                                <p class="font-medium text-xs leading-[14px] text-[#979797]">20.01.2024</p>
                            </div>
                        </div>
                      </div></RouterLink>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

