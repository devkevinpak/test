<template>
  <div>
    <div style="position: relative; width: 100%; height: 300px; ">
      <div v-for="(dot, index) in sinArr" :key="index" style="position: absolute; width: 10px; height: 10px; border-radius:100%; background-color: red;" :style="`top: ${dot.y + 100}px; left: ${dot.x*10}px;`"></div>
    </div>
    <div style="position: relative; width: 100%; height: 300px; ">
      <div v-for="(dot, index) in cosArr" :key="index" style="position: absolute; width: 10px; height: 10px; border-radius:100%; background-color: red;" :style="`top: ${dot.y + 100}px; left: ${dot.x*10}px;`"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    sinArr () {
      let result = []
      for (let i = 0; i < 100; i++) {
        result[i] = { "x": i, "y": Math.floor(Math.sin(i * .2) * 100)}
      }
      return result
    },
    cosArr () {
      let result = []
      for (let i = 0; i < 100; i++) {
        result[i] = { "x": i, "y": Math.floor(Math.cos(i * .2) * 100)}
      }
      return result
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
