import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Navigation from '@/views/Navigation.vue'
import WaterMark from '@/views/WaterMark.vue'


const routes = [
    { path: '/', redirect:'/navigation'},
    // { path: '/dicom', component: Dicom},
    { 
      path: '/home',
      component: Home,
      redirect: '/navigation',
      children: [{ path: '/navigation', component: Navigation}]
    },
    { 
        path: '/home',
        component: Home,
        children: [{ path: '/watermark', component: WaterMark}]
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router