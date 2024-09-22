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
import { PushNotifications } from '@capacitor/push-notifications';

const router = useRouter();
const isAuthenticated = ref(false);



const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions()

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions()
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!')
  }

  await deviceToken()
}

const deviceToken = async () => {
  await PushNotifications.addListener('registration', (token) => {
        localStorage.setItem('deviceToken', token.value)
        if (!isToken.value) {

          //Вот тут добавить запрос на отправку токена на бэк
          const { data, status } = addDeviceToken(token.value)
          if (status === 200) {
            isToken.value = true
          }
        }
      }
  )
}

onMounted(() => {
  const user = localStorage.getItem('userData');
  if (user) {
    isAuthenticated.value = true;
  } else {
    router.push('/auth');
  }
  registerNotifications()
});

</script>
