const INITIAL_BALL_SPEED = 3;
var player1Position, player2Position;
var player1Velocity, player2Velocity;
var ball;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const BALL_RADIUS = 20;
var ball, ballVelocity;


function setup() {
   createCanvas(600, 400);
   player1Position = player2Position = height / 2 - 50; 
  
  player1Velocity = player2Velocity = 0;
   // initialize player position to mid screen
   ball = createVector(width / 2, height / 2); // initialize ball in the middle
  
   ballVelocity = createVector(random(-1, 1), random(-1, 1)); // give the ball a random trajectory
   ballVelocity.setMag(INITIAL_BALL_SPEED); // set the speed to 3
}

function draw() {
  background(220);
  background(51);
  rect(PADDLE_WIDTH * 2, player1Position, PADDLE_WIDTH, PADDLE_HEIGHT);
  rect(width - (PADDLE_WIDTH * 3), player2Position, PADDLE_WIDTH, PADDLE_HEIGHT);
  ellipse(ball.x, ball.y, BALL_RADIUS);
  
  handlePaddles();
  handleBall();
}

function handleBall() {

  ball.x += ballVelocity.x;
  ball.y += ballVelocity.y;

  /* top & bottom collisions */
  if (ball.y > height || ball.y < 0)
    ballVelocity.y *= -1; // reverse y-velocity

 }

function handlePaddles() {

  /* player one controls */
  if (keyIsDown(87)) {
    /* move up */

    player1Velocity -= 5;
  } else if (keyIsDown(83)) {
    /* move down */

    player1Velocity += 5;
  }

  /* player two controls */
  if (keyIsDown(UP_ARROW)) {
    /* move up */

    player2Velocity -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    /* move down */

    player2Velocity += 5;
  }

	/* change position */
  player1Position += player1Velocity;
  player2Position += player2Velocity;

  /* friction */
  player1Velocity *= 0.4;
  player2Velocity *= 0.4;

  /* constrain paddles */
  player1Position = constrain(player1Position, 0, height - PADDLE_HEIGHT);
  player2Position = constrain(player2Position, 0, height - PADDLE_HEIGHT);
}
