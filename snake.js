function setup() {
     
  //mandatory lines
 
  createCanvas(1000, 800);
  
  
  //Snake array, organized by center x and y coords of each square
  snake = [500, 340,
           500, 380,
           500, 420,
           500, 460,
           500, 500,
           500, 540]
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
	
	  //body
  fill(150,150,150)
  for(i = snake.length; i > 0; i -= 2){
  	rect(snake[i]-20, snake[i+1]-20, 40, 40)
  }

snake.pop()
snake.pop()
snake.unshift(snake[0], snake[1]-40)


}
