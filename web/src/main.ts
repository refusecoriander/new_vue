import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index'
//导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入全局组件
import AllMenu from './global/index'



createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(AllMenu)
    .mount('#app')