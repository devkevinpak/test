<template>
  <div>
    HomeMain

  </div>
</template>

<script>

export default {
  props: {
    theme: {
      type: String
    }
  },
  components: {

  },
  data() {
    return {
      toggle: true
    }
  },
  computed: {
    getTheme() {
      return this.$app.state.theme
    }
  }
}
</script>

