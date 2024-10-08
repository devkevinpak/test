<template>
  <div>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </div>
</template>
<script>
import '../js/gl-matrix-min.js'
import { initBuffers } from '../js/init-buffers'
import { drawScene } from '../js/draw-scene'
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
    makeCanvas () {
      const canvas = document.querySelector("#glcanvas");
      const gl = canvas.getContext("webgl");
      if (gl === null) {
        alert(
          "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
      }
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      ////////////////////////////////////////////
      const vsSource = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        void main() {
          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        }
      `;
      const fsSource = `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `;
      const shaderProgram = this.initShaderProgram(gl, vsSource, fsSource);
      const programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        },
      };
      const buffers = initBuffers(gl);
      drawScene(gl, programInfo, buffers);
    },
    initShaderProgram (gl, vsSource, fsSource) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      // Create the shader program

      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      // If creating the shader program failed, alert

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
          `Unable to initialize the shader program: ${gl.getProgramInfoLog(
            shaderProgram,
          )}`,
        );
        return null;
      }

      return shaderProgram;
    },
    loadShader (gl, type, source) {
      const shader = gl.createShader(type);

      // Send the source to the shader object

      gl.shaderSource(shader, source);

      // Compile the shader program

      gl.compileShader(shader);

      // See if it compiled successfully

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(
          `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
        );
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }
  },
  mounted () {
    this.makeCanvas()
  }
}
</script>
<style lang="scss" scoped >
#waveda {
  height: 400px;
}
#testset {
  height: 400px;
}
</style>
