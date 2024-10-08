<template>
  <div>
    <div class="btn_toggle_theme" @click="changeTheme"> change theme </div>
    <div class="btn_toggle_side_menu" @click="toggleMenu">{{ toggle ? 'CLOSE' : 'OPEN'}}</div>
    <nav>
      <ul class="menu-lists">
        <li
          v-for="(page, index) in pageList"
          :key="index"
        >
          <div
            class="list-name"
            :class="{active: currentTabIndex === index}"
            @click="pageMove(index)"
          >
            {{page.meta.title}}
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import store from "@/store"
import router, { routes } from "@/router"
export default {
  props: {
    toggle: {
      type: Boolean
    },
  },
  data() {
    return {

    }
  },
  computed: {
    currentTabIndex () {
      return store.getters.getTabIndex
    },
    pageList () {
      return routes
    }
  },
  methods: {
    pageMove(idx) {
      if (this.currentTabIndex === idx) {
        router.go(0)
      } else {
        store.commit('setTabIndex', idx)
        router.push({ name: routes[idx].name })
      }
    },
    toggleMenu() {
      this.$emit('toggleMenu')
    },
    changeTheme () {
      let currentTheme = this.$app.state.theme
      if (currentTheme === 'theme-night') {
        this.$app.state.theme = 'theme-day'
        this.$app.setTheme('theme-day')
      } else {
        this.$app.state.theme = 'theme-night'
        this.$app.setTheme('theme-night')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  position: relative;
  .menu-lists {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    li {
      .list-name {
        position: relative;
        font-size: 18px;
        padding: 10px 20px;
        color: var(--theme-button-color-sidemenu);
        cursor:pointer;

        &:after {
          content: "";
          position: absolute;
          display: block;
          bottom: 0;
          left: 0;
          width: 100%;;
          height: 1px;
          background-color: var(--theme-button-color-sidemenu);
          transition: all .4s;
          transform: scale(0, 1);
        }
        &.active {
          &:after {
            transform: scale(1, 1);
          }
        }
      }
    }
  }
}
.btn_toggle_side_menu {
  position: absolute;
  bottom: 30px;
  right: -30px;
  width: 60px;
  height:60px;
  border-radius: 100%;
  text-align: center;
  line-height: 60px;
  background-color: black;
  color:#fff;
}
.btn_toggle_theme {
  position: absolute;
  bottom: 10px;
  left: 20px;
  padding: 20px;
  border:1px solid;
  color: var(--theme-button-color-sidemenu);
}
</style>
