<script setup lang='ts'>
import emblaCarouselVue from 'embla-carousel-vue'
import first from '@assets/firstSlide.png'
import second from '@assets/secondSlide.png'
import third from '@assets/thirdSlide.png'
import Dots from './components/Dots.vue'
import { ref, watch } from 'vue'

const [emblaRef, emblaApi] = emblaCarouselVue();
const scrollSnaps = ref<number[]>([]);
const selectedIndex = ref(0);

const onInit = () => {
  scrollSnaps.value = emblaApi.value?.scrollSnapList() || [];
};

const onSelect = () => {
  selectedIndex.value = emblaApi.value?.selectedScrollSnap() || 0;
};
const slides = [
  {
    img: first,
    text: [
      'Обучающий мультфильм “Иду к стоматологу”',
      'Социальные истории посещения стоматолога',
      'Обучающая игра-тренажер похода к врачу'
    ],
    title: 'С заботой о детях'
  },
  {
    img: second,
    text: [
      'Запись на встречи-экскурсии в стоматологию',
      'Чек-лист сформированности навыка похода к врачу',
      'Рекомендации'
    ],
    title: 'В помощь родителям'
  },
  {
    img: third,
    text: [
      'Рекомендации по организации осмотра и лечения',
      'Доступ к подробной информации об индивидуальных особенностях ребенка',
      'Анкета и чек-лист ребенка'
    ],
    title: 'Ресурсы для врачей'
  }
]

watch(emblaApi, () => {
  onInit();
  onSelect();
  emblaApi.value?.on("reInit", onInit);
  emblaApi.value?.on("reInit", onSelect);
  emblaApi.value?.on("select", onSelect);
})
</script>
<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div class="embla__slide flex flex-col items-center" v-for="(item, index) in slides" :key="index">
        <div class="w-[98%]">
          <div class="w-full h-[230px] flex items-center justify-center">
            <img :src="item.img" class="max-h-[230px] max-w-[240px]" />
          </div>
          <div class="bg-secondary h-[250px] w-full flex items-center flex-col rounded-md pt-10">
            <h2 class=" font-bold text-base">{{ item.title }}</h2>
            <ul class=" list-disc w-3/4 mt-2">
              <li v-for="(text, index) in item.text" :key="index">
                {{ text }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <Dots v-if="scrollSnaps" :dots="scrollSnaps" :selected-index="selectedIndex + 1" class="mx-auto mt-2 w-fit" />
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
</style>