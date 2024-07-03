import { createApp } from 'vue'
import { router, store } from "./providers";
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
