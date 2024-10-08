import Vue from 'vue'
import App from './App.vue'
import AppPlugin from './plugin'
import store from './store'
import router from './router'
import './style/common.scss'

// const AppUi = Vue.observable({
//   count: 0
// })
Vue.use(AppPlugin)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
