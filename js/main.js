let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let player = new Player();
let lvl = 1;
let image = new Image();
image.src =
  "https://www.sccpre.cat/mypng/detail/84-849365_transparent-x-mark-clipart-x-marks-the-spot.png";

// var mySound;
// let mySound = new sound("bounce.mp3");

let obstacles = [
  new Cross(200, 105, 95, 0.03),
  new MovingBall(400, 10, 400, 200, 2.5, 6),
  new MovingBall(430, 200, 430, 10, 2.5, 6),
  new MovingBall(460, 10, 460, 200, 2.5, 6),
  new MovingBall(490, 200, 490, 10, 2.5, 6),
  new MovingBall(520, 10, 520, 200, 2.5, 6),
  new MovingBall(550, 200, 550, 10, 2.5, 6),
  new MovingBall(580, 10, 580, 200, 2.5, 6),
  new MovingBall(610, 200, 610, 10, 2.5, 6)

];

let obstacles2 = [
  new Cross(200, 55, 50, 0.03),
  new Cross(200, 160, 50, 0.03),
  new Cross(100, 55, 50, 0.03),
  new Cross(100, 160, 50, 0.03),
  new Cross(450, 105, 95, 0.045),
  // new MovingBall(240, 20, 400, 20, 3, 15),
  // new MovingBall(240, 60, 400, 60, 3, 15),
  // new MovingBall(280, 20, 440, 20, 3, 15),
  // new MovingBall(280, 60, 440, 60, 3, 15),
  // new MovingBall(240, 190, 400, 190, 3, 15),
  // new MovingBall(240, 150, 400, 150, 3, 15),
  // new MovingBall(280, 190, 440, 190, 3, 15),
  // new MovingBall(280, 150, 440, 150, 3, 15),

  // new MovingBall(460, 150, 520, 20, 3, 15),
  // new MovingBall(520, 130, 520, 190, 2.5, 15)
];

let obstacles3 = [
  new Cross(80, 180, 22, 0.07),
  new Cross(80, 150, 22, 0.07),
  new Cross(180, 180, 22, -0.17),
  new Cross(180, 150, 22, -0.17),
  new Cross(280, 180, 22, 0.07),
  new Cross(280, 150, 22, 0.07),
  new Cross(370, 100, 70, 0.035),
  new MovingBall(70, 90, 260, 90, 5, 7),
  new MovingBall(260, 65, 70, 65, 5, 7),
  new MovingBall(260, 15, 70, 15, 5, 7),
  new MovingBall(70, 40, 260, 40, 5, 7),
  new MovingBall(260, 110, 70, 110, 5, 7),

  new MovingBall(520, 10, 520, 200, 4, 6),
  new MovingBall(550, 200, 550, 10, 4, 6),
  new MovingBall(580, 10, 580, 200, 4, 6),
  new MovingBall(610, 200, 610, 10, 4, 6),
  new MovingBall(640, 10, 640, 200, 4, 6),
  
  new MovingBall(500, 180, 600, 180, 4, 15),
  
];
let obstacles31 = [
  new InvisibleBall(662, 15, 662, 150, 30, 7),
  
];

let obstacles4 = [
  new InvisibleBall(662, 90, 662, 170, 30, 7)
];

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const DEBUG = true;

function drawLine() {
  ctx.save();
  ctx.lineWidth = 5;

  ctx.save();
  ctx.fillStyle = "rgba(0, 102, 34, 0.5)"
  // ctx.fillStyle = "#006600";
  ctx.fillRect(650, 0, 50, 210);
  ctx.restore();

  ctx.fillStyle = "#e6e6e6";
  ctx.font = "30px Arial";
  ctx.fillText("X marks the spot", 200, 265);

  ctx.beginPath();
  ctx.moveTo(700, 210);
  ctx.lineTo(0, 210);
  ctx.stroke();

  ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();

  ctx.restore();
}

// To draw things on the canvas
// Don't change any variable (except ctx) in this function
function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawLine();

  player.draw(ctx);

  if (lvl === 1) {
    for (let i = 0; i < obstacles.length; i++) obstacles[i].draw(ctx);
    ctx.fillStyle = "#e6e6e6";
    ctx.font = "20px Arial";
    ctx.fillText("Level 1", 10, 20);
  }
  if (lvl === 2) {
    for (let i = 0; i < obstacles2.length; i++) obstacles2[i].draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillText("Level 2", 10, 20);
    ctx.drawImage(image, 345, 150, 15, 15);
  }
  if (lvl === 3) {
    for (let i = 0; i < obstacles3.length; i++) obstacles3[i].draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillText("Level 3", 10, 20);
    ctx.font = "20px Arial";
    ctx.fillText("Ye, good luck with this one", 280, 25);
    ctx.drawImage(image, 650, 182, 25, 25);
  }
  if (lvl === 4) {
    ctx.font = "15px Arial";
    
    ctx.fillText("Bonus Problem:", 30, 15);
    ctx.fillText("Based upon the inscriptions on the boxes (none or just one of them is true)", 30, 35);
    ctx.fillText("choose the one that has the path to the end of the game. The boxes are saying: ", 30, 55)
    ctx.fillText("GOLD BOX: The path is through this box. ", 100, 100)
    ctx.fillText("SILVER BOX: The path is not through this box. ", 100, 140)
    ctx.fillText("WHITE BOX: The path is not through the golden box. ", 100, 180)

    ctx.save();
    ctx.fillStyle = "#b38f00";
    ctx.fillRect(650, 80, 50,50);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#808080";
    ctx.fillRect(650, 0, 50,50);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(650, 155, 50,50);
    ctx.restore();
  }
  if (lvl === 5) {
    ctx.font = "60px Arial";
    ctx.fillText("Ok, you did it...", 150, 125);
  }
  if (lvl === 6) {
    ctx.font = "60px Arial";
    ctx.fillText("Ok, you did it...", 150, 125);
    ctx.font = "20px Arial";
    ctx.fillText("... what are you doing? You did it, stop moving", 150, 165);
  }
}

// To change variables
function updateEverything() {
  player.update();

  if (lvl === 1) {
    for (let i = 0; i < obstacles.length; i++) obstacles[i].update();
  }
  if (lvl === 2) {
    for (let i = 0; i < obstacles2.length; i++) obstacles2[i].update();
  }
  if (lvl === 3) {
    for (let i = 0; i < obstacles3.length; i++) obstacles3[i].update();
    for (let i = 0; i < obstacles31.length; i++) obstacles31[i].update();
   
  }
  if (lvl === 4) {
    for (let i = 0; i < obstacles4.length; i++) obstacles4[i].update();
  }

  //COLLISION

  if (lvl === 1) {
    for (let j = 0; j < obstacles.length; j++) {
      if (obstacles[j].checkCollision(player)) {
        console.log("Collision!");
        startAgain();
      }
    }
  }
  if (lvl === 2) {
    for (let j = 0; j < obstacles2.length; j++) {
      if (obstacles2[j].checkCollision(player)) {
        console.log("Collision!");
        startAgain();
      }
    }
  }

  if (lvl === 3) {
    for (let j = 0; j < obstacles3.length; j++) {
      if (obstacles3[j].checkCollision(player)) {
        console.log("Collision!");
        startAgain();
      }
    } 
  }
  if (lvl === 3) {
    for (let j = 0; j < obstacles31.length; j++) {
      if (obstacles31[j].checkCollision(player)) {
        console.log("Collision!");
        startAgain();
      }
    } 
  }
  if (lvl === 4) {
    for (let j = 0; j < obstacles4.length; j++) {
      if (obstacles4[j].checkCollision(player)) {
        console.log("Collision!");
        startAgain();
      }
    }
  }
}

function startAgain() {
  player = new Player();
}

function nextLevel2() {
  console.log("function lvel 2 ", lvl);
  player = new Player();
  lvl = 2;
}

function nextLevel3() {
  console.log("function lvel 3 ", lvl);
  player = new Player();
  lvl = 3;
}
function nextLevel4() {
  console.log("function lvel 3 ", lvl);
  player = new Player();
  lvl = 4;
}

function endGame() {
  player = new Player();
  lvl = 5;
}

function endGame2() {
  lvl = 6;
}

function animation() {
  updateEverything();
  drawEverything();
  window.requestAnimationFrame(animation);
}
animation();

document.onkeydown = event => {
  console.log(event.keyCode);

  if (event.keyCode === 37) {
    player.vx = -5;
  }

  // right
  if (event.keyCode === 39) {
    player.vx = 5;
  }
  // up
  else if (event.keyCode === 38) {
    player.vy = -5;
  }
  // down
  if (event.keyCode === 40) {
    player.vy = 5;
  }
};

document.onkeyup = event => {
  // left
  if (event.keyCode === 37 && player.vx < 0) {
    player.vx = 0;
  }
  // right
  if (event.keyCode === 39 && player.vx > 0) {
    player.vx = 0;
  }
  // up
  if (event.keyCode === 38 && player.vy < 0) {
    player.vy = 0;
  }
  // down
  if (event.keyCode === 40 && player.vy > 0) {
    player.vy = 0;
  }
};

// Utils function
function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

// function obsSound() {
//   mySound = new sound("bounce.mp3");
// }
