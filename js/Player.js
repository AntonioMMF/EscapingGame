class Player {
  constructor() {
    this.radius = 10;
    this.x = 14;
    this.y = 100;
    this.vx = 0;
    this.vy = 0;
  }
  draw(ctx) {
    ctx.save();

    ctx.fillStyle = "blue";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
  update() {
    this.x += 0.35 * this.vx;
    this.y += 0.35 * this.vy;

    if (this.x - this.radius < 0) this.x = this.radius;
    if (this.x + this.radius > CANVAS_WIDTH)
      this.x = CANVAS_WIDTH - this.radius;
    if (this.y - this.radius < 0) this.y = this.radius;
    if (this.y + this.radius > CANVAS_HEIGHT - 95)
      this.y = CANVAS_HEIGHT - 95 - this.radius;
    if (player.x + player.radius > CANVAS_WIDTH - 25 && lvl === 1) {
      nextLevel2();
    }
    if (player.x + player.radius > CANVAS_WIDTH - 25 && lvl === 2) {
      nextLevel3();
    }
    if (player.x + player.radius > CANVAS_WIDTH - 25 && lvl === 3) {
      nextLevel4();
    }
    if (player.x + player.radius > CANVAS_WIDTH - 25 && lvl === 4) {
      endGame();
    }
    if (player.x + player.radius > CANVAS_WIDTH - 600 && lvl === 5) {
      endGame2();
    }
  }
}
