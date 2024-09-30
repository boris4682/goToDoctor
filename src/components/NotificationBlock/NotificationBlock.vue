<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';

interface Props {
  messages: any[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="notify-list max-h-[460px] overflow-auto">
    <div v-for="(message, i) in props.messages" :key="i" class="notify-list__item">
      <Avatar v-if="message.message_picture_url" :image="'https://idykvrachy.ru' + message.message_picture_url" shape="circle" />
      <div class="flex justify-between items-center">
        <p class="font-bold">{{ message.message_title }}</p>
        <p class="text-right text-sm opacity-50">{{ message.date_added_format }}</p>
      </div>
      <p class="mt-1">{{ message.message_text }}</p>

      <Divider />
    </div>
  </div>
</template>
