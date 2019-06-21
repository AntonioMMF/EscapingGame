class Cross {
  constructor(x, y, radius, speedAngle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = 0;
    this.speedAngle = speedAngle;
  }
  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.fillStyle = "#990000";
    ctx.strokeStyle = "#990000";
    ctx.lineWidth = 5;

    // Circle
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Line for x
    ctx.beginPath();
    ctx.moveTo(-this.radius, 0);
    ctx.lineTo(this.radius, 0);
    ctx.stroke();

    // Line for y
    ctx.beginPath();
    ctx.moveTo(0, -this.radius);
    ctx.lineTo(0, this.radius);
    ctx.stroke();

    ctx.restore();

    if (DEBUG) {
      for (let iAngle = 0; iAngle < 4; iAngle++) {
        let angle = this.angle + (iAngle * Math.PI) / 2;
        for (let delta = 0; delta <= this.radius; delta += this.radius / 10) {
          let x = this.x + delta * Math.cos(angle);
          let y = this.y + delta * Math.sin(angle);
          // Circle
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }
  }
  update() {
    this.angle += this.speedAngle;
  }
  // Return true when the cross and player are colliding
  checkCollision(player) {
    for (let iAngle = 0; iAngle < 4; iAngle++) {
      let angle = this.angle + (iAngle * Math.PI) / 2;
      for (let delta = 0; delta <= this.radius; delta += this.radius / 10) {
        let x = this.x + delta * Math.cos(angle);
        let y = this.y + delta * Math.sin(angle);
        if (distance({ x: x, y: y }, player) < player.radius) return true;
      }
    }
    return false;
  }
}
