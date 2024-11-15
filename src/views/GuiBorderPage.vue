<template>
  <div>
    <h3>1번방법 -겹치기</h3>
    <div class="test_area_00">
      <div class="imgFrame">
        <img class="imImg" src="../imgs/test2.png" />
      </div>
    </div>
    <h3>2번방법 - mask</h3>
    <div class="imgFrame2">
      <img class="imImg" src="../imgs/test2.png" />
    </div>
    <h3>3번방법 - svg</h3>
    <div class="imgFrame3">
      <div class="frame">
        <svg preserveAspectRatio="xMaxYMid meet">
          <defs>
            <linearGradient id="frameColor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(0,0,0,1)" />
              <stop offset="100%" stop-color="rgba(0,0,0,.2)" />
            </linearGradient>
          </defs>
          <image href="../imgs/test2.png" x="0" y="0" width="100%" height="100%"  />
          <rect class="rect" x="0" y="0" width="100%" height="100%" />
        </svg>
      </div>
    </div>
    <h3>4번방법 - border-img-source</h3>
    <div class="imgFrame4">
      <img class="imImg" src="../imgs/test2.png" />
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
  }
}
</script>
<style lang="scss" >
/*  ================================================================  */
$commonSize: 300px;
$commonSizeW: 250px;
$commonSizeH: 164px;
$border-width: 3px;
$border-radius: 10px;
/*  ================================================================  */
.test_area_00 {
  width: #{$commonSizeW};
  height: #{$commonSizeH};
}
@mixin imgFrame($url, $borderWidth, $radius) {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: #{$radius};
  overflow: hidden;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2)), url(#{$url});
  border: #{$borderWidth} solid transparent;
  background-clip: border-box, border-box;
  background-repeat: no-repeat, no-repeat;
  background-position: 0 0;
  background-size: cover, cover;
  background-origin: border-box, border-box;
  img {
    position: absolute;
    top: #{$radius * -1};
    left: #{$radius * -1};
    width: calc(100% + #{$radius * 2});
    height: calc(100% + #{$radius * 2});
    object-fit: cover;
  }
}
.imgFrame {
  @include imgFrame("../imgs/test2.png", $border-width, $border-radius)
}

/*  ================================================================  */
@mixin imgFrame($borderWidth, $radius, $color) {
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: $border-width solid $color;
    border-radius: $border-radius;
    mask: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2)) border-box;
  }
}
.imgFrame2 {
  position: relative;
  width: #{$commonSizeW};
  height: #{$commonSizeH};
  border-radius: #{$border-radius};
  overflow: hidden;
  @include imgFrame(#{$border-width}, #{$border-radius}, rgba(0,0,0,1));
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}



/*  ================================================================  */

.imgFrame3 {
  --var-rect-stroke-width: 4px;
  --var-rect-rxry: 10px;
  position: relative;
  width: #{$commonSizeW};
  height: #{$commonSizeH};
  border-radius: #{$border-radius};
  overflow: hidden;
}
.frame {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
.frame svg {
  width: 100%;
  height: 100%;
}
.frame svg .rect {
  x: 0;
  y: 0;
  rx: var(--var-rect-rxry);
  ry: var(--var-rect-rxry);
  width: 100%;
  height: 100%;
  stroke-width: var(--var-rect-stroke-width);
  stroke: url('#frameColor');
  fill: none;
}
.imgFrame3 .img-box {
  position:relative;
  width: 100%;
  height: 100%;
  z-index:1;
}
.imgFrame3 .img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/*  ================================================================  */
.imgFrame4 {
  position: relative;
  border-radius: #{$border-radius};
  overflow: hidden;
  display: block;
  width: #{$commonSizeW};
  height: #{$commonSizeH};
  border: #{$border-width} solid;
  border-image-source: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .0));
  border-image-width: #{$border-width};
  border-image-slice: 1;
  border-radius: #{$border-radius};
  background-image: url("../imgs/test2.png"), linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  background-clip: border-box, border-box;
  background-repeat: no-repeat, no-repeat;
  background-position: 0 0, 0 0;
  background-size: cover, cover;
  background-origin: border-box, border-box;
}
</style>

