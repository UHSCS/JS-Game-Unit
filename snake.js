function setup() {
  
  //mandatory lines
  noStroke()
  createCanvas(1000, 800);
  
  //basic game vars
  live = true
  points = 0
  
  //Snake array, organized by center x and y coords of each square
  snake = [500, 340,
           500, 380,
           500, 420,
           500, 460,
           500, 500,
           500, 540]

  //apple
  apple_pos = [500, 180]
  
}

function draw() {
  
  //background 
  background(240,240,240);
  
  //lattice lines
  fill(220,220,220)
  for(i = 0; i < 1000; i += 40){
  	rect(i-1, 0, 2, 800)
  }
  for(i = 0; i < 800; i += 40){
  	rect(0, i-1, 1000, 2)
  }  
}
