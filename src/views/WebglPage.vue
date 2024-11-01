<template>
  <div>
    <div id="webgl-canvas"></div>
    <insert-html :content="getTestText" :scopeId="$options._scopeId"/>
  </div>
</template>
<script>
import WebGLApp from '../js/webgl'
import InsertHtml from '@/components/html'
export default {
  components: {
    InsertHtml
  },
  data() {
    return {
    }
  },
  watch: {
  },
  computed: {
    getTestText () {
      return '혹시????? <div class="el_div"> change theme1 </div><span class="el_span"> change theme2 </span><br /><span class="el_span"> change<br />theme3 </span>'
    }
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
<style lang="scss" >
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
<style lang="scss" scoped>
.insertHtml {
  font-size: 30px;
}
.el_div {
  border:1px solid yellow;
  padding: 20px;
  margin-top: 10px;
}
.el_span {
  display: inline-block;
  border:1px solid yellow;
  padding: 20px;
  margin-top: 10px;
}
</style>

