// class ObstacleRec {
//     constructor(initialX, initialY, width, height, vx, vy, color) {
//         this.x = initialX;
//         this.y = initialY;
//         this.width = width;
//         this.height = height;
//         this.vx = vx;
//         this.vy = vy;
//         this.color = color;

//     }
//     draw(ctx) {
//         ctx.save(); // save and restore to don't change the state of ctx  
//         ctx.fillStyle = this.color;
        
//         ctx.fillRect(this.x, this.y, this.width, this.height);
    
        
//         ctx.restore();
//     }
//     update() {
//         this.x += this.vx;
//         this.y += this.vy;
    
//         if (this.right() > CANVAS_WIDTH || this.left() < 0) {
//          this.vx *= -Math.abs(this.vx)
//         }
//         if (this.bottom() > CANVAS_HEIGHT -100) {
//           this.vy = -Math.abs(this.vy) // => to give a bouncing force that is always the same
//           // this.vy = -Math.abs(this.vy) // => to have a simple bounce or number as alternative
//         }
//         if (this.top() < 0) {
//           this.vy = Math.abs(this.vy)
//         }
    
//       }
//       top() { return this.y - this.height }
//       bottom() { return this.y + this.height }
//       left() { return this.x - this.width}
//       right() { return this.x + this.width }

// }

class Obstacles {
  constructor() {
    
  }
}