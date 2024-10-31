import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '@/views/HomeMain.vue'
import GridLayout from '@/views/GridLayout.vue'
import SubPage from '@/views/SubPage.vue'
import SamplePage from '@/views/SamplePage.vue'
import TmobiScreenSize from '@/views/TmobiScreenSize.vue'
import IconLists from '@/views/IconLists.vue'
import CubePage from '@/views/CubePage.vue'
import WavePage from '@/views/WavePage.vue'
import TrigonometryPage from '@/views/TrigonometryPage.vue'
import WebglPage from '@/views/WebglPage.vue'
import LoginPage from '@/views/LoginPage.vue'

export const PAGES = {
  HOME: 'HomeMain',
  GRIDLAYOUT: 'GridLayout',
  SUBPAGE: 'SubPage',
  SAMPLEPAGE: 'SamplePage',
  TMOBISCREENSIZE: 'TmobiScreenSize',
  ICONLISTS: 'IconLists',
  CUBE: 'CubePage',
  WAVE: 'WavePage',
  TRIGONOMETRY: 'TrigonometryPage',
  WEBGL: 'WebglPage',
  LOGIN: 'LoginPage'
}

export const routes = [
  { name: PAGES.HOME, path: '/', component: HomeMain, meta: { title: 'home Main' }},
  { name: PAGES.GRIDLAYOUT, path: '/gridlayout', component: GridLayout, meta: { title: 'Grid Layout' }},
  { name: PAGES.SAMPLEPAGE, path: '/sample', component: SamplePage, meta: { title: 'Sample Page' }},
  { name: PAGES.ICONLISTS, path: '/IconLists', component: IconLists, meta: { title: 'Icon Lists' }},
  { name: PAGES.SUBPAGE, path: '/sub', component: SubPage, meta: { title: 'Sub page' }},
  { name: PAGES.TMOBISCREENSIZE, path: '/tmobiscreensize', component: TmobiScreenSize, meta: { title: 'TmobiScreenSize page test' } },
  { name: PAGES.CUBE, path: '/Cube', component: CubePage, meta: { title: 'Cube Page' } },
  { name: PAGES.WAVE, path: '/Wave', component: WavePage, meta: { title: 'Wave Page' } },
  { name: PAGES.TRIGONOMETRY, path: '/Trigonometry', component: TrigonometryPage, meta: { title: 'Trigonometry Page' } },
  { name: PAGES.WEBGL, path: '/Webgl', component: WebglPage, meta: { title: 'Webgl' } },
  { name: PAGES.LOGIN, path: '/Login', component: LoginPage, meta: { title: 'Login' } }
]


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'abstract',
  routes
})

router.push({ name: PAGES.HOME })

// const isLogin = window.localStorage.getItem('isLogin')
// if (isLogin && isLogin === 'true') router.push({ name: PAGES.HOME })
// else router.push({ name: PAGES.LOGIN })

export default router


