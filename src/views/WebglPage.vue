<template>
  <div>
    <div id="webgl-canvas"></div>
  </div>
</template>
<script>
import WebGLApp from '../js/webgl'
export default {
  components: {
  },
  data() {
    return {
    }
  },
  watch: {
  },
  computed: {

  },
  methods: {

  },
  activated () {
    console.log('%cactivated!!', 'color: red')
  },
  deactivated () {
    console.log('%cdeactivated!!', 'color: red')
  },
  mounted () {
    const webglApp = new WebGLApp('#webgl-canvas');
    webglApp.render();
    window.addEventListener('resize', () => webglApp.render());
  }
}
</script>
<style lang="scss"  >
$canvasSize: 800px;
#webgl-canvas {
  width: $canvasSize;
  height: $canvasSize;
  box-shadow: 0 0 0 2px red;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
