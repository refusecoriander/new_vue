import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Navigation from '@/views/Navigation.vue'
import WaterMark from '@/views/WaterMark.vue'
import Xui from '@/views/Xui.vue'
import BaoTa from '@/views/BaoTa.vue'
import Racknerd from '@/views/Racknerd.vue'
import TwitterDown from '@/views/TwitterDown.vue'
import QRcode from '@/views/QRcode.vue'
import HotTrends from '@/views/HotTrends.vue'
import ShareTxt from '@/views/ShareTxt.vue'

const routes = [
  {path: '/login',name: 'login', component: Login, meta: { isPublic: true }},
  {
    path: '/',
    name: 'home',
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
      { path: '/sharetxts', name: 'sharetxts',component: ShareTxt},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router