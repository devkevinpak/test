<template>
  <div class="cube-wrap">
    <div class="cube">
      <svg v-for="n in 2" :key="n" class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: rgba(255,255,255,1); stop-opacity:1"></stop>
        <stop offset="90%" style="stop-color: rgba(255,255,255,.2); stop-opacity:0"></stop>
        <stop offset="100%" style="stop-color: rgba(255,255,255,0); stop-opacity:0"></stop>
        </linearGradient>
        <linearGradient id="wave-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: transparent; stop-opacity:1"></stop> <!-- Color 1 -->
        <stop offset="100%" style="stop-color: transparent; stop-opacity:0"></stop> <!-- Color 2 -->
        </linearGradient>
        <linearGradient id="wave-gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: rgba(230, 230, 230,1); stop-opacity:1"></stop>
        <stop offset="90%" style="stop-color: rgba(230, 230, 230,.2); stop-opacity:0"></stop>
        <stop offset="100%" style="stop-color: rgba(230, 230, 230,0); stop-opacity:0"></stop>
        </linearGradient>
        <linearGradient id="wave-gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: rgba(190, 244, 238,1); stop-opacity:1"></stop>
        <stop offset="90%" style="stop-color: rgba(190, 244, 238,.2); stop-opacity:0"></stop>
        <stop offset="100%" style="stop-color: rgba(190, 244, 238,0); stop-opacity:0"></stop>
        </linearGradient>
        <filter id="wave-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="rgba(255, 255, 255, .5)" />
        </filter>
        </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient4)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)"/>
        <use xlink:href="#gentle-wave" x="48" y="3" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient3)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="5" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="1" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="2" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="2" stroke-width="10" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        </g>
      </svg>
      <!-- <div class="face front"></div> -->
      <div class="face back"></div>
      <!-- <div class="face top"></div>
      <div class="face bottom"></div>
      <div class="face left"></div>
      <div class="face right"></div> -->
    </div>
  </div>
</template>
<script>
import { Cube } from '../js/cube'
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
    makeCube (target) {
      this.cube = new Cube(target)
      this.cube.init()
    },
  },
  mounted () {
    this.makeCube('cube')
  }
}
</script>
<style lang="scss" scoped>
@mixin waves($order) {
  .waves:nth-child(#{$order}) {
    transform: translateX(#{($order * .1) + 22vmin}) translateY(20vmin) translateZ(-25vmin) rotate3d(0, 1, 0, #{(($order % 9) * 3 - 110deg)});
    .parallax > use {
      &:nth-child(1) {
        // animation-delay: #{($order * 3) - 2s};
        animation-duration: 2s;
      }
      &:nth-child(2) {
        // animation-delay: #{($order * 3) - 3s};
        animation-duration: 3s;
      }
      &:nth-child(3) {
        // animation-delay: #{($order * 3) - 4s};
        animation-duration: 4s;
      }
      &:nth-child(4) {
        // animation-delay: #{($order * 3) - 5s};
        animation-duration: 5s;
      }
      &:nth-child(5) {
        // animation-delay: #{($order * 3) - 6s};
        animation-duration: 8s;
      }
      &:nth-child(6) {
        // animation-delay: #{($order * 3) - 6s};
        animation-delay: -2s;
        animation-duration: 7s;
      }
    }
  }
}
.waves {
  position: absolute;
  transform-origin: left;
  width: 140%;
  height: 15%;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  .parallax > use {
    animation: move-forever 1s cubic-bezier(.55,.5,.45,.5) infinite;
  }
}
@for $i from 1 through 40 {
  @include waves($i)
}
@keyframes move-forever {
  0% {
    transform: translate3d(-175px,0,0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 0;
  }
}

$size: 50vmin;
@mixin face($color, $tx: 0px, $ty: 0px, $tz: 0px, $rx: 0deg, $ry: 0deg) {
  background-color: $color;
  transform: translateX($tx) translateY($ty) translateZ($tz) rotateX($rx)
    rotateY($ry);
}

.cube-wrap {
  position: relative;
  margin-top: 400px;
  perspective: 1000px;
  height: 90vh;
}
.cube {
  transform-style: preserve-3d;
  transform: rotateX(-25deg) rotateY(25deg);
  position: absolute;
  width: $size;
  height: $size;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  .face {
    box-sizing: border-box;
    border: 5px solid white;
    width: $size;
    height: $size;
    position: absolute;
    top: 0;
    left: 0;
    &.back {
      @include face($color: rgba(0, 0, 0, 0.5), $tz: -$size / 2);
    }
    // &.front {
    //   @include face($color: rgba(255, 192, 203, 0.5), $tz: $size / 2);
    // }
    // &.back {
    //   @include face($color: rgba(135, 206, 235, 0.5), $tz: -$size / 2);
    // }
    // &.top {
    //   @include face($color: rgba(0, 128, 0, 0.5), $ty: -$size / 2, $rx: 90deg);
    // }
    // &.bottom {
    //   @include face($color: rgba(255, 255, 0, 0.5), $ty: $size / 2, $rx: 90deg);
    // }
    // &.left {
    //   @include face($color: rgba(0, 0, 255, 0.5), $tx: -$size / 2, $ry: 90deg);
    // }
    // &.right {
    //   @include face($color: rgba(255, 0, 0, 0.5), $tx: $size / 2, $ry: 90deg);
    // }
  }
}
</style>

