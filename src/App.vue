<template>
  <div id="app" :class="[getModelType, getTheme]">
    <div class="global_container" :class="{closeMenu: !toggle}">
      <SideMenu
        class="global_menu"
        :toggle="toggle"
        @toggleMenu="toggleMenu"
      />
      <ScrollComponent>
        <div class="global_content">
          <keep-alive :exclude="keepAliveExcludeList">
            <router-view></router-view>
          </keep-alive>
          <button v-if="$route.name !== 'LoginPage'" @click="changeLogin">로그아웃</button>
        </div>
      </ScrollComponent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { SideMenu } from '@/components/sidemenu'
import { ScrollComponent } from '@/components/scroll'
import { PAGES } from "@/router"

export default {
  components: {
    SideMenu,
    ScrollComponent
  },
  data() {
    return {
      toggle: true
    }
  },
  watch: {

  },
  computed: {
    ...mapGetters([
      'getIsLogin'
    ]),
    getModelType() {
      return this.$app.state.modelType
    },
    getTheme() {
      return this.$app.state.theme
    },
    getIsLogin () {
      return localStorage.getItem('isLogin')
    },
    keepAliveExcludeList () {
      return [PAGES.HOME, PAGES.GRIDLAYOUT, PAGES.WEBGL, PAGES.LOGIN]
    }
  },
  methods: {
    changeLogin() {
      window.localStorage.setItem('isLogin', false)
      // this.$store.commit('isLogin', false)
    },
    toggleMenu() {
      this.toggle = !this.toggle
    }
  },
  created () {
    // this.$store.commit('isLogin', true)
  }
}
</script>
<style lang="scss" scoped>
.global_container {
  --side-menu-width: 280px;
  position: relative;
  padding-left: var(--side-menu-width);
  transition: padding-left .4s;
  height: 100vh;
  .global_menu {
    position:fixed;
    top: 0;
    left: 0;
    width: var(--side-menu-width);
    height: 100vh;
    background-color:var(--theme-background-color-sidemenu);
    transform: translateX(0);
    transition: transform .4s;
    z-index: 10;
  }
  .global_content {
    position: relative;
    padding:20px 16px;
    overflow: hidden;
  }
  &.closeMenu {
    padding-left: 0;
    .global_menu {
      transform: translateX(calc(var(--side-menu-width) * -1));
    }
  }
}
</style>