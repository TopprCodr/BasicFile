var player_paddle, comp_paddle, ball, net;

function setup() {

  createCanvas(400, 400);

  //create a player paddle sprite
  player_paddle = createSprite(390, 200, 10, 70);
  

  //create a computer paddle sprite
  comp_paddle = createSprite(10, 200, 10, 70);
  //create net sprite
  net = createSprite(200, 1, 3, 800);
  
  //add colours to sprites
  net.shapeColor = "grey"
  player_paddle.shapeColor = "green";
  comp_paddle.shapeColor = "blue";

  //create the pong ball
  ball = createSprite(200, 200, 12, 12);
  ball.shapeColor = "red"
}

function draw() {
  //fill the computer screen with white color
  background("white");
  edges = createEdgeSprites();
  
  player_paddle.x = 380;
  player_paddle.y = World.mouseY;
  
  comp_paddle.x = 10;
  comp_paddle.y = ball.y;
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(player_paddle);
  ball.bounceOff(comp_paddle);
  
  //to serve the ball
  if (keyDown("space")) {
    ball.velocityX = 3;
    ball.velocityY = 5;
  }
  
  // to reset the ball
  if (ball.x > 400 || ball.x < 0) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  drawSprites();
}