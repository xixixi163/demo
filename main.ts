import { createApp } from 'vue';
import App from './App.vue'
import lotus from "@lotus-leaf/mini-app";

const app = createApp(App)
app.use(lotus)
app.mount('#app')