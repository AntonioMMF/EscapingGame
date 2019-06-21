class InvisibleBall {
  // The ball will move from the point (x1,y1) to (x2,y2) at speed and go backward
  constructor(x1, y1, x2, y2, speed, radius) {
    this.x = x1;
    this.y = y1;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.speed = speed;
    this.radius = radius;
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    
    
    ctx.restore();
  }
  update() {
    this.x += this.vx();
    this.y += this.vy();

    if (
      Math.min(this.x1, this.x2) > this.x ||
      Math.max(this.x1, this.x2) < this.x ||
      Math.min(this.y1, this.y2) > this.y ||
      Math.max(this.y1, this.y2) < this.y
    ) {
      this.speed *= -1;
    }
  }

  vx() {
    let vector = {
      x: this.x2 - this.x1,
      y: this.y2 - this.y1
    };
    let vectorLength = Math.sqrt(vector.x ** 2 + vector.y ** 2);
    return (this.speed * vector.x) / vectorLength;
  }
  vy() {
    let vector = {
      x: this.x2 - this.x1,
      y: this.y2 - this.y1
    };
    let vectorLength = Math.sqrt(vector.x ** 2 + vector.y ** 2);
    return (this.speed * vector.y) / vectorLength;
  }

  checkCollision(player) {
    if (distance(player, this) < player.radius + this.radius) return true;
    else return false;
  }
}