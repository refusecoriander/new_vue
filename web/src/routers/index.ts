import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Navigation from '@/views/Navigation.vue'
import WaterMark from '@/views/WaterMark.vue'
import Xui from '@/views/Xui.vue'
import BaoTa from '@/views/BaoTa.vue'
import Racknerd from '@/views/Racknerd.vue'
import TwitterDown from '@/views/TwitterDown.vue'
import QRcode from '@/views/QRcode.vue'

const routes = [
  { path: '/', redirect: '/navigation' },
  // { path: '/dicom', component: Dicom},
  {
    path: '/home',
    component: Home,
    redirect: '/navigation',
    children: [{ path: '/navigation', component: Navigation }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/watermark', component: WaterMark }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/xui', component: Xui }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/baota', component: BaoTa }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/racknerd', component: Racknerd }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/twitterdown', component: TwitterDown }]
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/qrcode', component: QRcode }]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router