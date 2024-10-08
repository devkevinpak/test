import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '@/views/HomeMain.vue'
import GridLayout from '@/views/GridLayout.vue'
import SubPage from '@/views/SubPage.vue'
import SamplePage from '@/views/SamplePage.vue'
import AgreementPage from '@/views/AgreementPage.vue'
import IconLists from '@/views/IconLists.vue'
import CubePage from '@/views/CubePage.vue'
import WavePage from '@/views/WavePage.vue'
import TrigonometryPage from '@/views/TrigonometryPage.vue'
import WebglTestPage from '@/views/WebglTestPage.vue'

export const PAGES = {
  HOME: 'HomeMain',
  GRIDLAYOUT: 'GridLayout',
  SUBPAGE: 'SubPage',
  SAMPLEPAGE: 'SamplePage',
  AGREEMENT: 'AgreementPage',
  ICONLISTS: 'IconLists',
  CUBE: 'CubePage',
  WAVE: 'WavePage',
  WEBGL: 'WebglTestPage'
}

export const routes = [
  { name: PAGES.HOME, path: '/', component: HomeMain, meta: { title: 'home Main' }},
  { name: PAGES.GRIDLAYOUT, path: '/gridlayout', component: GridLayout, meta: { title: 'Grid Layout' }},
  { name: PAGES.SAMPLEPAGE, path: '/sample', component: SamplePage, meta: { title: 'Sample Page' }},
  { name: PAGES.ICONLISTS, path: '/IconLists', component: IconLists, meta: { title: 'Icon Lists' }},
  { name: PAGES.SUBPAGE, path: '/sub', component: SubPage, meta: { title: 'Sub page' }},
  { name: PAGES.AGREEMENT, path: '/agreement', component: AgreementPage, meta: { title: 'agreement page test' } },
  { name: PAGES.CUBE, path: '/Cube', component: CubePage, meta: { title: 'CubePage' } },
  { name: PAGES.WAVE, path: '/Wave', component: WavePage, meta: { title: 'WavePage' } },
  { name: PAGES.TRIGONOMETRY, path: '/Trigonometry', component: TrigonometryPage, meta: { title: 'TrigonometryPage' } },
  { name: PAGES.WEBGL, path: '/ Webgl', component: WebglTestPage, meta: { title: 'WebglTestPage' } }
]


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'abstract',
  routes
})

router.push({ name: PAGES.HOME })

// const isAgree = window.localStorage.getItem('store-agree')
// if (isAgree && isAgree === 'true') router.push({ name: PAGES.HOME })
// else router.push({ name: PAGES.AGREEMENT })

export default router


