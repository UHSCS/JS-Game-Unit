var player1Position, player2Position;
var ball;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const BALL_RADIUS = 20;

function setup() {
   createCanvas(600, 400);
   player1Position = player2Position = height / 2 - 50; 
   // initialize player position to mid screen
   ball = createVector(width / 2, height / 2); // initialize ball in the middle
}

function draw() {
  background(220);
  background(51);
  rect(PADDLE_WIDTH * 2, player1Position, PADDLE_WIDTH, PADDLE_HEIGHT);
  rect(width - (PADDLE_WIDTH * 3), player2Position, PADDLE_WIDTH, PADDLE_HEIGHT);
  ellipse(ball.x, ball.y, BALL_RADIUS);
}
