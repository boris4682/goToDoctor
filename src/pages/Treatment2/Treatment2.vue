<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import avatar from '@assets/icons/userpic.png'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-148px] cursor-pointer" @click="router.back()"/>
        <img :src="avatar" class="translate-x-[-10px] translate-y-[-75px]"/>
      </div>
      
      <div class="flex justify-center">
        <div class=" w-[354px] pb-[20px]">
            <div class="flex flex-col gap-[22px] translate-y-[15px]">
                <div>
                    <div class="flex justify-between">
                        <h4 class=" font-semibold text-[19px] leading-[18px] text-[#006879]">Стоматолог терапевт</h4>
                        <p class=" font-medium text-base leading-5 text-[#00B9C2]">20.01.2024</p>
                    </div>
                    <p class=" font-medium text-sm leading-[17px] text-[#979797] mt-[13px]">Адаптационный приём</p>
                    <p class=" font-medium text-xs leading-[14px] text-[#979797] mt-[9px]">Современная медицина</p>
                </div>
                <div class="mt-[25px] flex flex-col gap-[28px]">
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Жалобы или симптомы</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero doloremque, magni possimus facere exercitationem earum odit ipsa enim illo, et consequuntur molestiae? Magni id nobis exercitationem ipsa explicabo pariatur maiores?</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Диагноз</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero doloremque, magni possimus facere exercitationem earum odit ipsa enim illo, et consequuntur molestiae? Magni id nobis exercitationem ipsa explicabo pariatur maiores?</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Заключение врача</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero doloremque, magni possimus facere exercitationem earum odit ipsa enim illo, et consequuntur molestiae? Magni id nobis exercitationem ipsa explicabo pariatur maiores?</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Рекомендации врача</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero doloremque, magni possimus facere exercitationem earum odit ipsa enim illo, et consequuntur molestiae? Magni id nobis exercitationem ipsa explicabo pariatur maiores?</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Рекомендации врача</h5>
                        <div class="flex justify-between mt-[24px]">
                            <p class="w-[135px] font-normal text-sm leading-[17px] text-[#00B9C2]">Полоскание йод+сода</p>
                            <div class="flex gap-[10px] items-center">
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">1шт.</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">3р.в д.</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">14дн</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">ПН-ВС</p>
                            </div>
                        </div>
                        <div class="flex justify-between mt-[24px] pb-[20px]">
                            <p class="w-[135px] font-normal text-sm leading-[17px] text-[#00B9C2]">Полоскание йод+сода</p>
                            <div class="flex gap-[10px] items-center">
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">1шт.</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">3р.в д.</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">14дн</p>
                                <p class="font-normal text-sm leading-[14px] text-[#000000]">ПН-ВС</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>
      
</template>

