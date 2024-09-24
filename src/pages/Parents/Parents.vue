<script setup lang="ts">
import back from "@assets/icons/back.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import playlist from "../../assets/playlist.svg";
import video from "../../assets/video.svg";
import letter from "../../assets/letter.svg";
import jigsaw from "../../assets/jigsaw.svg";

const router = useRouter();

const dataPerson = JSON.parse(localStorage.selectedPerson ?? "{}");
console.log(dataPerson);

const sections = [
  {
    img: playlist,
    title: "Видеоролики",
    link: "/video",
  },
  {
    img: video,
    title: "Анимационные фильмы",
    link: "/animcinema",
  },
  {
    img: letter,
    title: "Социальные истории",
    link: "/social-stories",
  },
  {
    img: jigsaw,
    title: "Онлайн игра-тренажёр",
    link: dataPerson.uf_game_link,
    blank: true,
  },
];
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
          <p class="text-[20px] font-semibold leading-[18px] text-[#006879]">
            Ребёнку
          </p>
        </div>
        <div class="flex flex-col gap-[15px] mt-[30px]">
          <a
            v-for="(item, index) in sections"
            :key="index"
            class="w-full rounded-2xl shadow-xl border-2 border-gray-300 flex pl-[26px] gap-[27px] py-[15px]"
            :href="item.link ?? ''"
            :target="item.blank ? '_blank' : ''"
            @click.prevent="
              item.blank || !item.link ? false : router.push(item.link)
            "
          >
            <img :src="item.img" />
            <p class="text-[#00B9C2] text-xl max-w-[210px] font-semibold">
              {{ item.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
