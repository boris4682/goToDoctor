<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import photo from "@assets/AnimCinema.png";
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
      <div class="w-[354px] pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Анимационные фильмы
          </p>
        </div>
        <div class="flex flex-col justify-center items-center mt-[60px]">
          <div
            v-for="film in dataPerson.uf_animation_film"
            :key="film.id"
            class="w-full text-center mb-[15px]"
          >
            <video :poster="film.preview" controls class="w-full rounded-2xl">
              <source
                :src="'https://idykvrachy.ru' + film.uf_video.path"
                type="video/quicktime"
              />
            </video>
            <h6 class="text-[14px] mt-[5px]">{{ film.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
