<template>
  <div>
    <DefaultLayout v-if="isAuthenticated">
      <Toast />
      <router-view />
    </DefaultLayout>
    <router-view v-else></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Toast from 'primevue/toast';
import DefaultLayout from './components/DefaultLayout.vue';

const router = useRouter();
const isAuthenticated = ref(false);

onMounted(() => {
  const user = localStorage.getItem('userData');
  if (user) {
    isAuthenticated.value = true;
  } else {
    router.push('/auth'); 
  }
});
</script>
