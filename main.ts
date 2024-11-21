import { createApp } from 'vue';
import App from './App.vue'
import lotus from "@lotus-leaf/mini-app";
import router from '@/router/index';


const app = createApp(App)
app.use(lotus)
app.use(router)
app.mount('#app')