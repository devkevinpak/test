<template>
	<i class="ic" :class="iconClass"></i>
</template>
<script>
export default {
	props: {
		name : {
			type: [String, Array, Object],
			required: true,
		}
	},
	computed : {
		iconClass() {
			return `${this.name}`;
		}
	}
}
</script>
<style lang="scss" scoped>
/* custom width */
@function spritePosition($distans, $stepX, $stepY) {
	$positionX: $distans * $stepX * -1 + 'px';
	$positionY: $distans * $stepY * -1 + 'px';
	@return $positionX $positionY;
}

.ic {
	display: block;
	width: 64px;
	height: 64px;
	margin: 0 auto;
	background-image: url('./sprite.png');
	background-size: 512px;
}

.ic-logo {
	width: 192px;
	margin-left: 0;
	background-position: #{spritePosition(64, 0, 1)};
}
.ic-allMenu {background-position: #{spritePosition(64, 4, 0)};}
.ic-favoriteOff {background-position: #{spritePosition(64, 1, 0)};}
.ic-favoriteOn {background-position: #{spritePosition(64, 2, 0)};}
.ic-noti {background-position: #{spritePosition(64, 0, 0)};}
.ic-close {background-position: #{spritePosition(64, 1, 2)};}
.ic-back {background-position: #{spritePosition(64, 0, 2)};}
.ic-zoomin {background-position: #{spritePosition(64, 6, 0)};}
.ic-zoomout {background-position: #{spritePosition(64, 7, 0)};}
.ic-arrowup-double {background-position: #{spritePosition(64, 3, 0)};}
.ic-refresh {background-position: #{spritePosition(64, 5, 0)};}
</style>
