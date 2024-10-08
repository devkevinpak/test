export class Point {
  constructor(index, x, y, speed) {
    this.x = x
    this.y = y
    this.fieldY = y
    this.speed = speed
    this.cur = index
    // this.max = Math.random() * 100 + 50
    this.max = 90
  }

  update() {
    this.cur += this.speed
    this.y = this.fieldY + Math.sin(this.cur) * this.max
  }
}