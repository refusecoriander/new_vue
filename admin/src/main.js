import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index.js'

//导入element-plus
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// createApp(App).config.productionTip = false

import http from './http'
// createApp(App).provide('$http', http)


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.config.globalProperties.$http = http
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')

