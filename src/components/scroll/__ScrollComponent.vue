<template>
  <div
    ref="scroll"
    class="scroll_component"
    :class="{active : activeScroll}"
    :style="customStyle"
    @mousedown.stop="mouseDownHandler($event)"
  >
    <div class="scroll_wrapper">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number
    },
    padding: {
      type: Number
    }
  },
  data() {
    return {
      activeScroll: false,
      timerForThrottle: null,
      pos: {
        top: 0,
        left: 0,
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    customStyle() {
      return {
        height: this.height + 'px',
        padding: this.padding + 'px' + ' ' + 0
      }
    }
  },
  methods: {
    createScrollIsActive() {
      let target = this.$refs.scroll
      if (target.clientHeight < target.childNodes[0].clientHeight) {
        this.activeScroll = true
      } else {
        this.activeScroll = false
      }
    },
    preventChildScroll() {
      const childElements = this.$refs.scroll.getElementsByTagName('*');
      for (let element of childElements) {
        element.addEventListener('mousedown', (e) => {
          e.stopPropagation();
        });

        element.addEventListener('mousemove', (e) => {
          e.stopPropagation();
        });

        element.addEventListener('mouseup', (e) => {
          e.stopPropagation();
        });
      }
    },
    mouseDownHandler(e) {
      this.createScrollIsActive()

      let target = this.$refs.scroll
      this.pos = {
        top: target.scrollTop,
        left: target.scrollLeft,
        x: e.clientX,
        y: e.clientY
      }
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
      // this.throttle(async () => {
      // }, 100)
    },
    mouseMoveHandler(e) {
      console.log('move')
      let target = this.$refs.scroll
      const dx = e.clientX - this.pos.x
      const dy = e.clientY - this.pos.y
      target.scrollTop = this.pos.top - dy
      target.scrollLeft = this.pos.left - dx
    },
    mouseUpHandler() {
      document.removeEventListener('mousemove', this.mouseMoveHandler)
      document.removeEventListener('mouseup', this.mouseUpHandler)
    },
    throttle (func, delay) {
      if (!this.timerForThrottle) {
        this.timerForThrottle = setTimeout(() => {
          func()
          this.timerForThrottle = null
        }, delay)
      }
    }
  },
  activated() {
    console.log('activated')
    this.createScrollIsActive()
  }
}
</script>
<style lang="scss" scoped>
.scroll_component {
  height: 100%;
  overflow: auto;
}
</style>
