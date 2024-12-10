import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '@/views/HomeMain.vue'
import GridLayout from '@/views/GridLayout.vue'
import SubPage from '@/views/SubPage.vue'
import GridSamplePage from '@/views/GridSamplePage.vue'
import TmobiScreenSize from '@/views/TmobiScreenSize.vue'
import IconLists from '@/views/IconLists.vue'
import CubePage from '@/views/CubePage.vue'
import WavePage from '@/views/WavePage.vue'
import TrigonometryPage from '@/views/TrigonometryPage.vue'
import WebglPage from '@/views/WebglPage.vue'
import InsertHtmlPage from '@/views/InsertHtmlPage.vue'
import GuiBorderPage from '@/views/GuiBorderPage.vue'
import TestPage from '@/views/TestPage.vue'
import ContainerQuery from '@/views/ContainerQuery.vue'
import LoginPage from '@/views/LoginPage.vue'

export const PAGES = {
  HOME: 'HomeMain',
  GRIDLAYOUT: 'GridLayout',
  GRIDSAMPLE: 'GridSamplePage',
  SUBPAGE: 'SubPage',
  TMOBISCREENSIZE: 'TmobiScreenSize',
  ICONLISTS: 'IconLists',
  CUBE: 'CubePage',
  WAVE: 'WavePage',
  TRIGONOMETRY: 'TrigonometryPage',
  WEBGL: 'WebglPage',
  INSERTHTML: 'InsertHtmlPage',
  GUIBORDER: 'GuiBorderPage',
  TESTPAGE: 'TestPage',
  CONTAINERQUERY: 'ContainerQuery',
  LOGIN: 'LoginPage'
}

export const routes = [
  { name: PAGES.HOME, path: '/', component: HomeMain, meta: { title: 'home Main' }},
  { name: PAGES.GRIDLAYOUT, path: '/gridlayout', component: GridLayout, meta: { title: 'Grid Layout' }},
  { name: PAGES.GRIDSAMPLE, path: '/gridsample', component: GridSamplePage, meta: { title: 'Grid Sample Page' }},
  { name: PAGES.ICONLISTS, path: '/IconLists', component: IconLists, meta: { title: 'Icon Lists' }},
  { name: PAGES.SUBPAGE, path: '/sub', component: SubPage, meta: { title: 'Sub page' }},
  { name: PAGES.TMOBISCREENSIZE, path: '/tmobiscreensize', component: TmobiScreenSize, meta: { title: 'TmobiScreenSize page test' } },
  { name: PAGES.CUBE, path: '/Cube', component: CubePage, meta: { title: 'Cube Page' } },
  { name: PAGES.WAVE, path: '/Wave', component: WavePage, meta: { title: 'Wave Page' } },
  { name: PAGES.TRIGONOMETRY, path: '/Trigonometry', component: TrigonometryPage, meta: { title: 'Trigonometry Page' } },
  { name: PAGES.WEBGL, path: '/Webgl', component: WebglPage, meta: { title: 'Webgl' } },
  { name: PAGES.INSERTHTML, path: '/InsertHtml', component: InsertHtmlPage, meta: { title: 'InsertHtml' } },
  { name: PAGES.GUIBORDER, path: '/GuiBorder', component: GuiBorderPage, meta: { title: 'GuiBorder' } },
  { name: PAGES.TESTPAGE, path: '/TestPage', component: TestPage, meta: { title: 'TestPage' } },
  { name: PAGES.CONTAINERQUERY, path: '/ContainerQuery', component: ContainerQuery, meta: { title: 'ContainerQuery' } },
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


