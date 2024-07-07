<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  selectedIndex: number;
  dots: number[];
}

const props = defineProps<IProps>();
</script>
<template>
  <div>
    <div class="flex gap-1">
      <div
        v-for="(_, index) in props.dots"
        class="w-2 h-2 rounded-full"
        :class="`${
          index + 1 === props.selectedIndex ? 'bg-secondary w-[28px] duration-300' : 'bg-secondary/60 '
        } ${index + 1 === props.selectedIndex ? 'duration-300' : 'duration-300'}`"
      ></div>
    </div>
  </div>
</template>
<style lang="scss"></style>
