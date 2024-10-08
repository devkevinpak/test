<template>
  <div>
    <h1 class="mb32">Icon Lists</h1>
    <div class="row row_gap_6 row_mb_6 mb32">
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-logo" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-allMenu" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-favoriteOff" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-favoriteOn" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-back" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-noti" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-close" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-zoomin" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-zoomout" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-arrowup-double" /></div></div>
      <div class="col col_2"><div class="ic-sample"><IconLists name="ic-refresh" /></div></div>
    </div>
    <h1 class="mb32">loading</h1>
    <div class="row row_gap_6">
      <div class="col col_2">
        <div class="loader_wrap mb16">
          <div class="loader">
            <svg class="circular-loader" viewBox="0 0 90 90" >
              <circle class="loader-path" cx="45" cy="45" r="43" fill="none" stroke-width="4"  />
            </svg>
          </div>
        </div>
      </div>
      <div class="col col_2">
        <div class="loader_wrap type_icon">
          <div class="loader">
            <div class="icon_wrap" style="padding:13px;"><IconLists name="ic-allMenu" /></div>
            <svg class="circular-loader" viewBox="0 0 90 90" >
              <circle class="loader-path" cx="45" cy="45" r="43" fill="none" stroke-width="4"  />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconLists } from "@/components/icon"

export default {
	components : {
		IconLists
	}
}
</script>
<style lang="scss" scope>
.ic-sample {
	padding: 10px 0;
  background-color: #000;
	border-radius: 8px;
}

$pieValue : 3.141592653589793;
$circleVolumeSize : calc(2 * $pieValue * 45);
$iconBgBefore : radial-gradient(circle at 52% 39%, #fff, #fce879 76%);
$iconBgAfter : radial-gradient(circle at 52% 39%, #fce879, #fce879 76%);

.loader_wrap {
	padding: 10px 0;
	background-color: #000;
	border-radius: 8px;

	.loader {
		position: relative;
		margin: 0px auto;
		width: 90px;
		height:90px;
		border-radius: 100%;
		overflow: hidden;
		.circular-loader {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			margin: auto;
			transform: rotate(-90deg);
			-webkit-animation: frame_rotate 2s linear infinite;
							animation: frame_rotate 2s linear infinite;

			.loader-path {
				stroke: #fff;
				stroke-dasharray: $circleVolumeSize;
				stroke-dashoffset: 0;
				stroke-linecap: round;
				-webkit-animation: dash 2s linear infinite;
								animation: dash 2s linear infinite;
			}
		}
	}

	&.type_icon .loader {

		.icon_wrap {
				position:absolute;
				top:0;
				left:0;
				z-index: 10;
			}
		.circular-loader {
			-webkit-animation: frame_rotate 5s linear infinite;
							animation: frame_rotate 5s linear infinite;

			.loader-path {
				stroke: #fcb500;
				-webkit-animation: dash2 3s linear infinite;
							animation: dash2 3s linear infinite;
			}
		}
	}
}



@keyframes frame_rotate {
	0% {
		transform: rotate(-90deg);
	}
	100% {
		transform: rotate(270deg);
	}
}
@keyframes dash {
	0% {
		stroke : #fff;
		stroke-dasharray: 3 22 27 22 65 133;
		stroke-dashoffset: calc($circleVolumeSize - 12);
	}
	50%  {
		stroke : #ac794c;
		stroke-dasharray: 1 0 12 0 45 202;
		// stroke-dashoffset: calc($circleVolumeSize * .6);
	}
	100% {
		stroke : #fff;
		stroke-dasharray: 3 22 27 22 65 133;
		stroke-dashoffset: 0;
		// stroke-dashoffset: calc($circleVolumeSize - 2);
	}
}

@keyframes dash2 {
	0% {
		fill: #000;
		stroke : #fceb00;
		stroke-dashoffset: $circleVolumeSize;
		opacity: 1;
	}
	50% {
		fill: #000;
		stroke : #fcb500;
		stroke-dashoffset: 0;
		opacity: 1;
		// stroke-dashoffset: calc($circleVolumeSize - 2);
	}
	65% {
		opacity: 0;
	}
	100% {
		fill: #808080;
		stroke-dashoffset: 0;
		opacity: 0;
		// stroke-dashoffset: calc($circleVolumeSize - 2);
	}
}
// .loader-path {
// 	stroke: #fff;
// 	stroke-dasharray: $circleVolumeSize;
// 	stroke-dashoffset: 0;
// 	// -webkit-animation: dash 1.2s linear infinite;
// 	// 				animation: dash 1.2s linear infinite;
// }
// @-webkit-keyframes dash {
// 	0% {
// 		stroke-dashoffset: $circleVolumeSize;
// 	}
// 	100% {
// 			stroke-dashoffset: 0;
// 	}
// }
// @keyframes dash {
// 	0% {
// 		stroke : #fff;
// 		stroke-dashoffset: $circleVolumeSize;
// 	}
// 	50% {
// 		stroke : #ac794c;
// 		stroke-dashoffset: 0;
// 	}
// 	100% {
// 		stroke : #fff;
// 		stroke-dashoffset: calc($circleVolumeSize * -1);
// 	}
// }
</style>