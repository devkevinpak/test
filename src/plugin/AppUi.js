import Vue from 'vue'
export class AppUi {
  constructor() {
    this.state = Vue.observable({
      modelType: 'type-wide',
      theme: 'theme-night'
    });
  }

  setTheme (theme) {
    localStorage.setItem('site-theme', theme)
  }
}