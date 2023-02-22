import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index'

//导入element-plus
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import http from './http'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios)

app.config.globalProperties.$http = http
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})
app.mount('#app')

