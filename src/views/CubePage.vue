<template>
  <div class="cube-wrap">
    <div class="cube">
      <svg v-for="n in 20" :key="n" class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
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
        <filter id="wave-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="rgba(255, 255, 255, .5)" />
        </filter>
        </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)"/>
        <use xlink:href="#gentle-wave" x="48" y="3" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="5" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="1" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="2" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        <use xlink:href="#gentle-wave" x="48" y="2" stroke-linecap="round" stroke="url(#wave-gradient)" fill="url(#wave-gradient2)" filter="url(#wave-shadow)" />
        </g>
      </svg>
      <div class="face back"></div>
      <div class="axis axisX"></div>
      <div class="axis axisY"></div>
      <div class="axis axisZ"></div>
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
// scss로는 기존값을 제외한 randomr값을 받을수없음
// 사용할 값 목록을 기재후 섞음 > 순차적으로 사용
$duration-values:  2, 3, 4, 5, 6, 7;
// $line-width-values:  1, 2, 3, 4, 5, 6;
@function set-nth($list, $n, $value) {
  $new-list: ();
  @for $i from 1 through length($list) {
    @if $i == $n {
      $new-list: append($new-list, $value);
    } @else {
      $new-list: append($new-list, nth($list, $i));
    }
  }
  @return $new-list;
}
@function shuffle($list) {
  $length: length($list);
  @for $i from 1 through $length {
    $rand: random($length);
    $temp: nth($list, $i);
    $list: set-nth($list, $i, nth($list, $rand));
    $list: set-nth($list, $rand, $temp);
  }
  @return $list;
}
$shuffled-duration-values: shuffle($duration-values);
// $shuffled-line-width-values: shuffle($line-width-values);

$size: 400px;
// $sizeW: 600px;
// $sizeH: 600px;
$bundleCount: 20;
$lineCount: 6;
@keyframes move_flow {
  0% {
    transform: translate3d(-120%, 0, 0);
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-15%, 0, 0);
    opacity: 0;
  }
}
@mixin waves($index, $rNumber) {
  $range: #{(($bundleCount * .5) * -1 + $index)};
  // $rangeDeg: (($bundleCount * .5) * -1) + $index * 10;
  .waves:nth-child(#{$index}) {
    $odd: translate3d($range + ($size * .5), #{($size * .5) - ($size * ($rNumber * .5 * .01))}, 0) rotate3d(0,1,0, #{$range + -90}deg);
    $even: translate3d($range + ($size * .5), #{($size * .5) - ($size * ($rNumber * .5 * .01))}, 0) rotate3D(1,0,1, #{$range + -180}deg);
    height: $rNumber + -4%;
    @if not ($index%2 == 0) {
      transform: $odd;
    } @else {
      transform: $even;
    }
    // transform: translate3d($range + ($size * .5), #{($size * .5) - ($size * (($rNumber + 20) * .5 * .01))}, 0) rotateY($range + -90deg);
  }
}
@mixin wavesLine($bundleIndex, $lineIndex, $rNumber) {
  .waves:nth-child(#{$bundleIndex}) {
    .parallax > use:nth-child(#{$lineIndex}) {
      stroke-width: $rNumber%4 + 2;
      animation: move_flow $rNumber + 0s cubic-bezier(.55,.5,.45,.5) infinite;
    }
  }
}
.waves {
  position: absolute;
  transform-origin: left;
  width: 50%;
  height: 16%;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
}
@for $i from 1 through $bundleCount {
  $min: 4;
  $max: 15;
  $randomNumber1: random($max - $min + 1) + $min - 1;
  @include waves($i, $randomNumber1);

  @for $j from 1 through $lineCount {
    $randomNumber2: nth($shuffled-duration-values, $j);
    @include wavesLine($i, $j, $randomNumber2);
  }
}


@mixin face($color, $tx: 0px, $ty: 0px, $tz: 0px, $rx: 0deg, $ry: 0deg) {
  background-color: $color;
  transform: translateX($tx) translateY($ty) translateZ($tz) rotateX($rx)
    rotateY($ry);
}

.cube-wrap {
  position: relative;
  perspective: 220px;
  width: $size;
  height: $size;
}
.cube {
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 0, 0deg);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  .face {
    box-sizing: border-box;
    border: 5px solid white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &.back {
      @include face($color: rgba(200, 100, 100, 0.3));
    }
  }
  .axis {
    position: absolute;
    top: calc(50% - 1px);
    width: 100%;
    border-top: 2px solid red;
    // &.axisX {}
    &.axisY {transform: rotate3d(0,0,1,90deg);}
    &.axisZ {transform: rotate3d(0,1,0,90deg);}
  }
}
</style>

