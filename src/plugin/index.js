import Vue from 'vue'
import { AppUi } from './AppUi.js'

export default {
  install () {
    const appUi = new AppUi()
    Vue.prototype.$app = appUi
  }
}