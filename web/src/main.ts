import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index'
//导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入全局组件
import AllMenu from './global/index'

import axios from 'axios'
createApp(App).config.globalProperties.$http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/web/api',
})

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(AllMenu)
    .mount('#app')