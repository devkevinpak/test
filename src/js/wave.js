import { Point } from './point.js';

export class Wave {
  constructor(color) {
    this.color = color
    this.points = []
    this.numberOfPoints = 9
    this.speed = .02
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth
    this.stageHeight = stageHeight

    this.centerX = stageWidth / 2
    this.centerY = stageHeight / 2

    this.pointGap = this.stageWidth / (this.numberOfPoints - 1)

    this.init()
  }

  init() {
    /* 가운데 하나의 점 만들기 */
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY, this.speed)
    }
  }

  draw(ctx) {
    ctx.beginPath()
    let prevX = this.points[0].x
    let prevY = this.points[0].y

    ctx.moveTo(prevX, prevY)

    for (let i = 0; i < this.numberOfPoints; i++) {

      const cx = (prevX + this.points[i].x) / 2
      const cy = (prevY + this.points[i].y) / 2

      ctx.quadraticCurveTo(prevX, prevY, cx, cy)

      prevX = this.points[i].x
      prevY = this.points[i].y

      if (i != 0 && i != this.numberOfPoints - 1) {
        this.points[i].update()
      }
    }
    // ctx.lineTo(prevX, prevY)
    // ctx.lineTo(this.stageWidth, this.stageHeight)
    // ctx.lineTo(0, this.stageHeight)
    // ctx.lineTo(this.points[0].x, this.points[0].y)

    // /* 색상 RED & 채우기 */
    // ctx.fillStyle = this.color
    // ctx.fill()

    ctx.lineTo(prevX, prevY)
    ctx.lineTo(this.stageWidth, this.stageHeight / 2)

    ctx.strokeStyle = "#990099"
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.closePath()
  }
}