<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import ico from '@assets/icons/ico.png'
import star from '@assets/icons/star.svg'
import card from '@assets/icons/material-symbols_sd-card-alert-outline.svg'
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
                <div class="flex justify-center items-center">
                    <p class=" font-semibold text-[14px] leading-[13px] text-black">шаг 3</p>
                </div>
                    <input type="text" name="search" placeholder="Клиника">
                <div class="mt-[20px] flex flex-col gap-[18px]">
                    <div class="w-full h-[73px] rounded-[13px] shadow-lg flex justify-around items-center border">
                        <img :src="ico" class="w-[44px] h-[52px]"/>
                        <div class="flex flex-col">
                            <h6 class=" font-semibold text-[20px] leading-5 text-[#00B9C2]">Стоматологическая №1</h6>
                            <div class="flex items-center justify-center mt-[8px] ">
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <img :src="card"/>
                                        <p class="w-[100px] font-normal text-xs leading-[14px] text-[#2C3E4F]">О клиника</p>
                                    </div>
                                    <p class=" font-normal text-xs leading-[14px] text-[#2C3E4F] ml-[28px]">Оценка:</p>
                                    <p class=" font-medium text-[15px] leading-[18px] text-[#2C3E4F] ml-1">4.8</p>
                                    <img :src="star"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="w-full h-[73px] rounded-[13px] shadow-lg flex justify-around items-center border">
                        <img :src="ico" class="w-[44px] h-[52px]"/>
                        <div class="flex flex-col">
                            <h6 class=" font-semibold text-[20px] leading-5 text-[#00B9C2]">Стоматологическая №1</h6>
                            <div class="flex items-center justify-center mt-[8px] ">
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <img :src="card"/>
                                        <p class="w-[100px] font-normal text-xs leading-[14px] text-[#2C3E4F]">О клиника</p>
                                    </div>
                                    <p class=" font-normal text-xs leading-[14px] text-[#2C3E4F] ml-[28px]">Оценка:</p>
                                    <p class=" font-medium text-[15px] leading-[18px] text-[#2C3E4F] ml-1">4.8</p>
                                    <img :src="star"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

<style>
input[type=text] {
  width: 364px;
  height: 49px;
  box-sizing: border-box;
  border: 1px solid #CDCDCD;
  border-radius: 10px;
  font-size: 19px;
  background-color: white;
  background-image: url('@assets/icons/Magnifier.svg');
  background-position:10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 50px;
}
</style>