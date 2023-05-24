import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入router
import router from "./router/index";
createApp(App).use(router).mount('#app')
