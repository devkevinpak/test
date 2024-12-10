<template>
  <div>
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!--
          mask 사용
          fill="white" 영역은 불투명 설정
          fill="black" 영역은 투명화 설정
          mask에서 어두울수록 투명화를 설정하게됨
          두 개의 <rect>를 조합하여,
          첫 번째 rect는 전체를 보여주는 기본 영역으로 설정하고,
          두 번째 rect는 내부를 투명하게 만드는 "구멍" 역할을 합니다.
        -->
        <!-- 마스크 정의 -->
        <mask id="mask">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <rect x="20" y="20" width="160" height="160" rx="20" ry="20" fill="black" />
        </mask>
        <!-- 그라데이션 정의 -->
        <!-- <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d6dce1" />
          <stop offset="30%" stop-color="#fcfdfd" />
          <stop offset="100%" stop-color="#d6dce1" />
        </linearGradient> -->
        <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0" stop-color="red" />
          <stop offset="1" stop-color="blue" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)" />
      <!-- <rect class="hole_rect" width="100%" height="100%" mask="url(#mask)" /> -->
    </svg>
    <!-- 구멍뚫기 위해 clip-rule 사용 evenodd, 기본값은 nonzero -->
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip2" clip-rule="evenodd">
          <!-- <path d="M0,20 A20,20 0 0 1 20,0 H180 A20,20 0 0 1 200,20 V180 A20,20 0 0 1 180,200 H20 A20,20 0 0 1 0,180 Z" /> -->
          <path d="M50,50 L150,50 L150,150 L50,150 Z M70,70 L130,70 L130,130 L70,130 Z" />
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill="blue" clip-path="url(#clip2)" />
    </svg>
    <div class="test_hole">
      <div class="hole hole_01">inset</div>
      <div class="hole hole_02">rect</div>
      <div class="hole hole_03">xywh</div>
      <div class="hole hole_04">polygon</div>
      <div class="hole hole_05">rect + mask
        <svg class="hole_clip_svg" width="100%" height="100%" viewBox="0 0 100% 100%" preserveAspectRatio="none" >
          <clipPath id="hole_01_svg" clip-rule="evenodd">
            <rect x="0" y="0" width="100%" height="100%" rx="10" ry="10" fill="blue"/>
          </clipPath>
        </svg>
      </div>
      <div class="hole hole_06">
        <svg width="100%" height="100%" viewBox="0 0 100% 100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="mask2">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect x="0" y="0" width="100%" height="100%" rx="40" ry="40" fill="black" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="green" mask="url(#mask2)" />
        </svg>
      </div>
    </div>
    <div class="video-container">
      <video controls autoplay loop poster="https://www.w3schools.com/images/w3schools_green.jpg">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
      <video controls autoplay loop>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
      <video controls autoplay loop>
        <source src="" type="*/*">
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
    </div>
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
    <h3>5번방법 - clip-path</h3>
    <div class="imgFrame5">
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
    -webkit-mask: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2)) border-box;
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
/*  ================================================================  */
// 기맥히죠
.imgFrame5 {
  width: 500px;
  height: 300px;
  border: 10px solid transparent;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2));
  background-clip: border-box;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  background-origin: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // rect(top right bottom left round radius)
    clip-path: rect(0 100% 100% 0 round 66px);
    // xywh(x y width height round rx ry)
    // clip-path: xywh(0 0 100% 100% round 10px 10px);
    // polygon(x1 y1, x2 y2, x3 y3, ...)
    // clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
  }
}
/*  ================================================================  */
.test_hole {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.hole {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: red;
  color: #fff;
}
.hole_01 {
  background-color: blue;
  // inset(top right bottom left round radius)
  clip-path: inset(0 0 0 0 round 66px);
}
.hole_02 {
  background-color: green;
  // rect(top right bottom left round radius)
  clip-path: rect(0 100% 100% 0 round 66px);
}
.hole_03 {
  background-color: orangered;
  // xywh(x y width height round rx ry)
  clip-path: xywh(0 0 100% 100% round 10px 60px);
}
.hole_04 {
  background-color: red;
  // polygon(x1 y1, x2 y2, x3 y3, ...)
  clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
}
.hole_05 {
  position: relative;
  background-color: orange;
  clip-path: url(#hole_01_svg);
  .hole_clip_svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
.hole_06 {
  background-color: darkblue;
}
// M 시작점 지정
// L 직선 그리기
// Z 시작점까지 연결하기
// H 수평선 긋기
// V 수직선 긋기
// C 곡선 긋기
// S 곡선 이어긋기
// Q 2차원 베지어 곡선 긋기
// T 2차원 베지어 곡선 이어긋기
// A 호 그리기
/*  ================================================================  */

/*  ================================================================  */
.video-container {
  width: 500px;
  margin: 20px 0;
}
.video-container video {
  width: 100%;
  border-radius: 20px;
}
</style>

