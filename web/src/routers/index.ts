import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Navigation from '@/views/Navigation.vue'
import WaterMark from '@/views/WaterMark.vue'
import Xui from '@/views/Xui.vue'
import BaoTa from '@/views/BaoTa.vue'
import Racknerd from '@/views/Racknerd.vue'
import TwitterDown from '@/views/TwitterDown.vue'
import QRcode from '@/views/QRcode.vue'
import HotTrends from '@/views/HotTrends.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', name: 'navigation',component: Navigation},
      { path: '/watermark', name: 'watermark',component: WaterMark},
      { path: '/xui', name: 'xui',component: Xui},
      { path: '/baota', name: 'baota',component: BaoTa},
      { path: '/racknerd', name: 'racknerd',component: Racknerd},
      { path: '/twitterdown', name: 'twitterdown',component: TwitterDown},
      { path: '/qrcode', name: 'qrcode',component: QRcode},
      { path: '/hottrends', name: 'hottrends',component: HotTrends},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router