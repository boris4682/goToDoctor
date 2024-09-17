<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Dots from "./components/Dots.vue";
import emblaCarouselVue from "embla-carousel-vue";
import { getBanners } from "@//services/service/getBanners";
import { DOMEN } from "@//consts";

const [emblaRef, emblaApi] = emblaCarouselVue();
const scrollSnaps = ref<number[]>([]);
const selectedIndex = ref(0);

const onInit = () => {
  scrollSnaps.value = emblaApi.value?.scrollSnapList() || [];
};

const onSelect = () => {
  selectedIndex.value = emblaApi.value?.selectedScrollSnap() || 0;
};

watch(emblaApi, () => {
  onInit();
  onSelect();
  emblaApi.value?.on("reInit", onInit);
  emblaApi.value?.on("reInit", onSelect);
  emblaApi.value?.on("select", onSelect);
});

// Получение баннеров

interface IBanner {
  name: string;
  detail_text: string;
  detail_picture: string;
  url: string;
}

const banners = ref<IBanner[]>([]);

const getBannersHandler = async () => {
  const { data } = await getBanners();
  if (data) {
    banners.value = data;
  } else {
    console.log("Ошибка на сервере");
  }
};

onMounted(getBannersHandler);
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div
        class="embla__slide flex flex-col items-center"
        v-for="(item, index) in banners"
        :key="index"
      >
        <div class="w-[98%]">
          <div class="w-full h-[230px] flex items-center justify-center">
            <img
              :src="`${DOMEN}${item.detail_picture}`"
              class="max-h-[230px] max-w-[240px]"
            />
          </div>
          <div
            class="embla__content bg-secondary w-full flex items-center flex-col rounded-md pt-10"
          >
            <h2 class="font-bold text-base">{{ item.name }}</h2>
            <div
              class="embla__text flex items-center flex-col w-full"
              v-html="item.detail_text"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <Dots
      v-if="scrollSnaps"
      :dots="scrollSnaps"
      :selected-index="selectedIndex + 1"
      class="mx-auto mt-2 w-fit"
    />
  </div>
</template>
<style scoped>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.embla__content {
  padding: 2.5rem 1rem 1rem 1rem;
  width: 100%;
  text-align: justify;
}
</style>
