import { createApp } from 'vue'
import { router, store } from "./providers";
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import {ru} from './localeConfig'
createApp(App).use(router).use(store).use(PrimeVue, {
  theme: {
    preset: Aura,
    ripple: true,
    locale: ru,
  }
}).mount('#app')
