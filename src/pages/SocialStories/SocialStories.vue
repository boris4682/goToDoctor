<script setup lang="ts">
import { ref } from "vue";
import back from "@assets/icons/back.png";
import PagesTemplate from "@/components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import Carousel from "primevue/carousel";

const router = useRouter();

const dataPerson = JSON.parse(localStorage.selectedPerson ?? "{}");
console.log(dataPerson);

const selectedStory = ref();
</script>

<template>
  <PagesTemplate class="pb-[80px]">
    <div class="h-[15vh]"></div>
    <div class="flex">
      <img
        :src="back"
        class="mx-auto w-[11px] h-[16px] translate-y-[-70px] translate-x-[-165px] cursor-pointer"
        @click="selectedStory ? (selectedStory = undefined) : router.back()"
      />
    </div>

    <div class="flex justify-center">
      <div class="w-[354px] max-w-full pb-[20px]">
        <div class="flex flex-col gap-[22px] translate-y-[-10px]">
          <p class="font-semibold text-[15px] leading-[18px] text-[#006879]">
            Социальные истории
          </p>
        </div>
        <div
          v-if="!selectedStory"
          class="flex items-center justify-center mt-[40px]"
        >
          <div class="w-[314px]">
            <div class="flex gap-[43px]">
              <div @click="selectedStory = 'Мама+девочка'">
                <img
                  class="prewiev-img"
                  :src="`https://idykvrachy.ru/upload/iblock/502/kuzztut7heub8e7vzbw2vr2eh4h31nk2.jpg`"
                />
                <p
                  class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]"
                >
                  Мама с дочкой
                </p>
              </div>
              <div @click="selectedStory = 'Папа+девочка'">
                <img
                  class="prewiev-img"
                  :src="`https://idykvrachy.ru/upload/iblock/101/mgko1uascbcalwkdj050fflrsqcv87d3.jpg`"
                />
                <p
                  class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]"
                >
                  Папа с дочкой
                </p>
              </div>
            </div>
            <div class="flex gap-[43px] mt-[60px]">
              <div @click="selectedStory = 'Мама+мальчик'">
                <img
                  class="prewiev-img"
                  :src="`https://idykvrachy.ru/upload/iblock/30f/4opxlszi3i9gza67vmmbwo10b06aj5qb.jpg`"
                />
                <p
                  class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]"
                >
                  Мама с сыном
                </p>
              </div>
              <div @click="selectedStory = 'Папа+мальчик'">
                <img
                  class="prewiev-img"
                  :src="`https://idykvrachy.ru/upload/iblock/a90/40b6j9brua6lhizwnn2dmwad0zwgw70p.jpg`"
                />
                <p
                  class="font-semibold text-[16px] leading-[17px] text-[#00B9C2] text-center mt-[13px]"
                >
                  Папа с сыном
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <Carousel
            :value="dataPerson.uf_social_stories[selectedStory]"
            :numVisible="1"
            :numScroll="1"
            :showIndicators="false"
          >
            <template #item="{ data }">
              <div class="text-center mb-[25px]">
                <img
                  :src="'https://idykvrachy.ru' + data.uf_picture_slide"
                  class="rounded-2xl"
                />
                <p class="text-[14px] mt-[5px]">{{ data.uf_text_slide }}</p>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </PagesTemplate>
</template>
<style scoped>
.prewiev-img {
  width: 130px;
  border-radius: 15px;
}
</style>
