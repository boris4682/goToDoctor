<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import photo1 from "@assets/child1.svg";
import { useRouter } from "vue-router";
const router = useRouter();

const dataPerson = JSON.parse(localStorage.selectedPerson ?? "{}");
console.log(dataPerson);
</script>

<template>
  <PagesTemplate class="pb-[80px]">
    <div class="h-[15vh]"></div>
    <div class="flex">
      <img
        :src="back"
        class="mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer"
        @click="router.back()"
      />
    </div>

    <div class="flex justify-center">
      <div class="w-[354px] max-w-full pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Видеоролики
          </p>
        </div>
        <!-- <div class="flex flex-col gap-[15px] mt-[30px]">

                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo1" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Видеоролики</p>
                </div>
                <div class="w-full h-[108px] border rounded-[13px] shadow-lg flex items-center">
                    <img :src="photo1" class="w-[81px] h-[71px] ml-[26px]"/>
                    <p class="font-semibold text-[17px] leading-[18px] text-[#00B9C2] ml-[27px] mb-[30px]">Видеоролики</p>
                </div>
            </div> -->

        <div class="flex flex-col justify-center items-center mt-[60px]">
          <div
            v-for="film in dataPerson.uf_video_link"
            :key="film.id"
            class="w-full text-center mb-[15px]"
          >
            <video :poster="film.preview_picture ? `https://idykvrachy.ru/${film.preview_picture}` : ''" controls class="w-full rounded-2xl">
              <source :src="'https://idykvrachy.ru' + film.uf_video.path" type="video/mp4" />
            </video>
            <h6 class="text-[14px] mt-[5px]">{{ film.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
