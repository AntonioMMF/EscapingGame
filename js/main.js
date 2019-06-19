let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let player = new Player();
let lvl = 1;


let obstacles = [
  new Cross(200, 105, 95, 0.03),
  new MovingBall(400, 10, 400, 200, 2.5, 6),
  new MovingBall(430, 200, 430, 10, 2.5, 6),
  new MovingBall(460, 10, 460, 200, 2.5, 6),
  new MovingBall(490, 200, 490, 10, 2.5, 6),
  new MovingBall(520, 10, 520, 200, 2.5, 6),
  new MovingBall(550, 200, 550, 10, 2.5, 6),
  new MovingBall(580, 10, 580, 200, 2.5, 6),
  new MovingBall(610, 200, 610, 10, 2.5, 6),
  //tricky ball: 
  //new MovingBall(657, 15, 657, 150, 20, 6)
];

let obstacles2 = [
  new Cross(200, 55, 50, 0.03),
  new Cross(200, 160, 50, 0.03),
  new Cross(100, 55, 50, 0.03),
  new Cross(100, 160, 50, 0.03),
  new MovingBall(240, 20, 400, 20, 3, 15),
  new MovingBall(240, 60, 400, 60, 3, 15),
  new MovingBall(280, 20, 440, 20, 3, 15),
  new MovingBall(280, 60, 440, 60, 3, 15),
  new MovingBall(240, 190, 400, 190, 3, 15),
  new MovingBall(240, 150, 400, 150, 3, 15),
  new MovingBall(280, 190, 440, 190, 3, 15),
  new MovingBall(280, 150, 440, 150, 3, 15),

  new MovingBall(460, 150, 520, 20, 3, 15),
  new MovingBall(520, 130, 520, 190, 2.5, 15)
];

let obstacles3 = [

  new Cross(80, 180, 22, 0.07),
  new Cross(80, 150, 22, 0.07),
  new Cross(180, 180, 22, -0.17),
  new Cross(180, 150, 22, -0.17),
  new Cross(280, 180, 22, 0.07),
  new Cross(280, 150, 22, 0.07),
  new MovingBall(70, 90, 260, 90, 4.45, 7),
  new MovingBall(260, 65, 70, 65, 4.45, 7),  
  new MovingBall(260,15, 70, 15, 4.45, 7),
  new MovingBall(70, 40, 260, 40, 4.45, 7),
  new MovingBall(260,110, 70, 110, 4.45, 7),

  new MovingBall(520, 10, 520, 200, 4, 6),
  new MovingBall(550, 200, 550, 10, 4, 6),
  new MovingBall(580, 10, 580, 200, 4, 6),
  new MovingBall(610, 200, 610, 10, 4, 6),
  new MovingBall(640, 10, 640, 200, 4, 6),
  new MovingBall(670, 200, 670, 10, 4, 6),

  new MovingBall(450, 180, 620, 180, 3, 15),
  new MovingBall(450, 25, 620, 25, 3, 15),

  new MovingBall(657, 15, 657, 150, 20, 7),

  
];

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const DEBUG = false;

function drawLine() {
  ctx.save();
  ctx.lineWidth = 5;
  // ctx.beginPath();
  // ctx.moveTo(650, 0);
  // ctx.lineTo(650, 90);
  // ctx.stroke();

  ctx.save();
  ctx.fillStyle = "#006600";
  ctx.fillRect(650, 0, 50, 210);
  ctx.restore();

  ctx.font = "30px Arial";
  ctx.fillText("Remember, X marks the spot", 100, 265);

  // ctx.beginPath();
  // ctx.moveTo(650, 120);
  // ctx.lineTo(650, 210);
  // ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(700, 210);
  ctx.lineTo(0, 210);
  ctx.stroke();

  ctx.restore();
}

// To draw things on the canvas
// Don't change any variable (except ctx) in this function
function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawLine();

  player.draw(ctx);

  // if (nextLevel2 ()) {

  //   for (let i = 0; i < obstacles2.length; i++)
  //      obstacles2[i].draw(ctx);
  //      console.log('level2')
  //     }
  if (lvl === 1) {
    for (let i = 0; i < obstacles.length; i++) obstacles[i].draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillText("Level 1", 10, 20);
  }
  if (lvl === 2) {
    for (let i = 0; i < obstacles2.length; i++) obstacles2[i].draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillText("Level 2", 10, 20);
    ctx.font = "20px Arial";
    ctx.fillText("You can't go through this one", 230, 115);
  }
  if (lvl === 3) {
    for (let i = 0; i < obstacles3.length; i++) obstacles3[i].draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillText("Level 3", 10, 20);
    ctx.font = "20px Arial";
    ctx.fillText("Ye, good luck with this one", 280, 115);
    
  }
  if (lvl === 4) {
    ctx.font = "60px Arial";
    ctx.fillText("Ok, you did it...", 150, 125);
  }
  if (lvl === 5) {
    ctx.font = "60px Arial";
    ctx.fillText("Ok, you did it...", 150, 125);
    ctx.font = "20px Arial";
    ctx.fillText("... what are you doing? You did it, stop moving", 150, 165);
  }
  }


// To change variables
// Don't use ctx
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
}

function startAgain() {
  player = new Player();
}

function nextLevel2() {
  console.log("function lvel 2 ",lvl)
  player = new Player();
  lvl = 2;
 
}

function nextLevel3() {
  console.log("function lvel 3 ",lvl)
  player = new Player();
  lvl = 3;
}

function endGame () {
  player = new Player();
  lvl = 4;
  
}

function endGame2 () {
  lvl = 5;
  
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

// function make_base()
// {
//   base_image = new Image();
//   base_image.src = 'https://www.sccpre.cat/mypng/detail/84-849365_transparent-x-mark-clipart-x-marks-the-spot.png';
//   base_image.onload = function(){
//     context.drawImage(base_image, 50, 50);
//   }
// }