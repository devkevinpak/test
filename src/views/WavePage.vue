<template>
  <div>
    <div id="wave"></div>
  </div>
</template>
<script>
import { Wave } from '../js/wave'
export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    makeCanvas (id, color) {
      this.canvasArea = document.getElementById(id)
      this.canvas = document.createElement('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.canvasArea.appendChild(this.canvas)

      window.addEventListener('resize', this.resize.bind(this), {
        once: false,
        passive: false,
        capture: false
      })
      this.wave = new Wave(color)
      this.resize()
      requestAnimationFrame(this.animate.bind(this))
    },
    resize () {
      this.stageWidth = this.canvasArea.clientWidth
      this.stageHeight = this.canvasArea.clientHeight

      this.canvas.width = this.stageWidth
      this.canvas.height = this.stageHeight

      this.ctx.scale(1, 1)

      this.wave.resize(this.stageWidth, this.stageHeight) // init() 있음
    },
    animate() {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
      this.wave.draw(this.ctx)
      requestAnimationFrame(this.animate.bind(this))
    }
  },
  mounted () {
    this.makeCanvas('wave', '#ff9900')
  }
}
</script>
<style lang="scss" scoped >
#wave {
  height: 400px;
}
</style>
