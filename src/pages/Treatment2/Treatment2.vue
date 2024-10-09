<script setup lang='ts'>
import back from '@assets/icons/back.png'
import PagesTemplate from '@//components/shared/PagesTemplate.vue';
import { useRouter, useRoute } from 'vue-router';
import { getInfoReception } from "@/services/reception/getInfoReception";
import { onMounted, ref } from "vue";
import Loader from "@//components/shared/Loader.vue";

const router = useRouter();
const route = useRoute();

const dataReception = ref();
const loading = ref(true);
const getDataReception = () => {
  loading.value = true;
  getInfoReception(+route.params.id)
      .then(({ data, status }) => {
        if (status != 200) return;
        dataReception.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
}

onMounted(() => {
  getDataReception();
})
</script>

<template>
    <PagesTemplate class=" pb-[80px]">
      <div class="h-[15vh]">
      </div>
      <div class="flex">
        <img :src="back" class=" mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-148px] cursor-pointer" @click="router.back()"/>
        <svg
            class="translate-y-[-74px] translate-x-[-15px] w-[25px] h-[25px]"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="52px"
            height="52px"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            opacity="0.3"
        >
          <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
          >
            <path
                d="M2380 5114 c-19 -2 -78 -9 -130 -14 -330 -36 -695 -160 -990 -336
              -375 -224 -680 -529 -904 -904 -175 -292 -291 -632 -338 -990 -16 -123 -16
              -497 0 -620 82 -623 356 -1150 820 -1581 256 -239 575 -425 922 -539 274 -91
              491 -124 800 -124 228 0 329 9 530 50 689 141 1304 583 1674 1204 175 292 291
              632 338 990 16 123 16 497 0 620 -47 358 -163 698 -338 990 -224 375 -529 680
              -904 904 -289 173 -634 291 -980 336 -88 12 -438 21 -500 14z m385 -304 c583
              -54 1146 -347 1517 -790 487 -581 652 -1337 452 -2067 -77 -281 -213 -550
              -398 -785 -34 -43 -63 -78 -66 -78 -3 0 -19 43 -35 96 -85 284 -283 589 -512
              790 -144 126 -341 247 -518 319 l-40 16 35 26 c63 47 216 208 253 266 142 221
              202 460 177 704 -37 366 -251 681 -575 850 -674 350 -1488 -91 -1565 -850 -20
              -197 18 -404 106 -579 71 -141 189 -287 305 -375 27 -20 49 -40 49 -43 0 -3
              -33 -18 -73 -34 -270 -109 -540 -321 -729 -571 -109 -145 -213 -349 -264 -520
              -15 -52 -31 -95 -34 -95 -8 0 -122 148 -179 233 -63 94 -174 310 -219 425 -78
              198 -127 427 -144 675 -52 717 271 1445 839 1898 459 366 1041 542 1618 489z
              m5 -860 c257 -73 458 -274 536 -535 35 -119 37 -289 6 -406 -93 -347 -395
              -579 -752 -579 -357 0 -659 232 -752 579 -31 117 -29 287 6 406 88 296 316
              497 636 559 58 11 247 -3 320 -24z m-5 -1851 c310 -40 584 -178 821 -414 178
              -178 290 -358 362 -585 26 -81 67 -271 59 -275 -1 -1 -31 -24 -67 -52 -308
              -240 -679 -394 -1095 -454 -116 -17 -454 -17 -570 0 -416 60 -787 214 -1095
              454 -36 28 -66 51 -67 52 -2 1 4 39 12 84 91 517 461 950 961 1124 221 77 431
              98 679 66z"
            />
          </g>
        </svg>
      </div>

      <div class="flex justify-center">
        <div class=" w-[354px] max-w-full pb-[20px]">
            <Loader v-if="loading" />
            <div v-else class="flex flex-col gap-[22px] translate-y-[15px]">
                <div>
                    <div class="flex justify-between">
                        <h4 class=" font-semibold text-[19px] leading-[18px] text-[#006879]">
                          {{ dataReception.doctor_specialization }}
                        </h4>
                        <p class=" font-medium text-base leading-5 text-[#00B9C2]">
                          {{ new Date(dataReception.datetime).toLocaleDateString() }}
                        </p>
                    </div>
                    <p class=" font-medium text-sm leading-[17px] text-[#979797] mt-[13px]">
                      {{ dataReception.reception }}
                    </p>
                    <p class=" font-medium text-xs leading-[14px] text-[#979797] mt-[9px]">
                      {{ dataReception.reception_service }}
                    </p>
                </div>
                <div class="mt-[25px] flex flex-col gap-[28px]">
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Жалобы или симптомы</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000] w-full">
                          {{ dataReception.reception_complaints ?? "Пусто" }}
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Диагноз</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000] w-full">
                          {{ dataReception.reception_diagnosis ?? "Пусто" }}
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Заключение врача</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000] w-full">
                          {{ dataReception.reception_doctor_opinion ?? "Пусто" }}
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Рекомендации врача</h5>
                        <p class="mt-[13px] font-normal text-[15px] leading-[14px] text-[#000000] w-full">
                          {{ dataReception.reception_doctor_recommendations ?? "Пусто" }}
                        </p>
                    </div>

<!--                    <div class="flex flex-col items-center justify-center">-->
<!--                        <h5 class=" font-medium text-[20px] leading-[19px] text-[#979797]">Рекомендации врача</h5>-->
<!--                        <div class="flex justify-between mt-[24px]">-->
<!--                            <p class="w-[135px] font-normal text-sm leading-[17px] text-[#00B9C2]">Полоскание йод+сода</p>-->
<!--                            <div class="flex gap-[10px] items-center">-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">1шт.</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">3р.в д.</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">14дн</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">ПН-ВС</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="flex justify-between mt-[24px] pb-[20px]">-->
<!--                            <p class="w-[135px] font-normal text-sm leading-[17px] text-[#00B9C2]">Полоскание йод+сода</p>-->
<!--                            <div class="flex gap-[10px] items-center">-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">1шт.</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">3р.в д.</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">14дн</p>-->
<!--                                <p class="font-normal text-sm leading-[14px] text-[#000000]">ПН-ВС</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
      </div>
    </PagesTemplate>

</template>
