export class Cube {
  constructor(targetClass) {
    this.class = '.'+ targetClass
    this.clickX = 0
    this.clickY = 0
    this.moveX = 0
    this.moveY = 0
    this.lastX = -25
    this.lastY = 25
    this.range = {
      minX: -30,
      maxX: 30,
      minY: -30,
      maxY: 30
    }
  }
  init() {
    let cubeEl = document.querySelector(this.class)
    console.log('%c sadfasdfasdf ', 'color: red', cubeEl)
    cubeEl.addEventListener("mousedown", (e) => {
      let isClick = true
      this.clickX = e.screenX
      this.clickY = e.screenY
      window.addEventListener("mousemove", (e) => {
        if (isClick) {
          const nowX = e.screenX
          const nowY = e.screenY
          this.moveX = this.lastX + this.clickY - nowY
          this.moveY = this.lastY - this.clickX + nowX

          cubeEl.style.transform = ` rotateX(${this.moveX}deg) rotateY(${this.moveY}deg)`
        }
      })

      window.addEventListener("mouseup", () => {
        if (isClick) {
          this.lastX = this.moveX
          this.lastY = this.moveY
          isClick = false
        }
      }, { once: true })
    })

    //   터치 이벤트    //
    cubeEl.addEventListener("touchstart", (e) => {
      let isTouch = true
      this.clickX = e.targetTouches[0].screenX
      this.clickY = e.targetTouches[0].screenY
      window.addEventListener("touchmove", (e) => {
        if (isTouch) {
          const nowX = e.targetTouches[0].screenX
          const nowY = e.targetTouches[0].screenY
          this.moveX = this.lastX + this.clickY - nowY
          this.moveY = this.lastY - this.clickX + nowX
          console.log(`X 회전각 : ${this.moveX}, Y 회전각 : ${this.moveY}`)
          // if (this.moveY > this.range.maxY) {
          //   this.moveY = this.range.maxY
          // }
          // if (this.moveY < this.range.minY) {
          //   this.moveY = this.range.minY
          // }
          // if (this.moveX > this.range.maxX) {
          //   this.moveX = this.range.maxX
          // }
          // if (this.moveX < this.range.minX) {
          //   this.moveX = this.range.minX
          // }
          cubeEl.style.transform = `rotateX(${this.moveX}deg) rotateY(${this.moveY}deg)`
        }
      })
      window.addEventListener("touchend", () => {
        if (isTouch) {
          this.lastX = this.moveX
          this.lastY = this.moveY
          isTouch = false
        }
      }, {
        once: true
      })
    }, false)
  }
}

