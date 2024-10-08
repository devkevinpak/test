<template>
  <div id="app" :class="[getModelType, getTheme]">
    <MainPage v-if="getIsLogin" />
    <NeedLogin v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MainPage } from '@/components/main'
import NeedLogin from '@/views/NeedLogin'

export default {
  components: {
    MainPage,
    NeedLogin
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
    }
  },
  methods: {

  },
  created () {
    this.$store.commit('isLogin', true)
  }
}
</script>
