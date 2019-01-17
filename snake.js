function setup() {
     
  //mandatory lines
 
  createCanvas(1000, 800);
  
	move_tick = 20
	dir = "up"
  
  //Snake array, organized by center x and y coords of each square
  snake = [500, 340,
           500, 380,
           500, 420,
           500, 460,
           500, 500,
           500, 540]
}

	function keyPressed(){	
	if(keyCode == UP_ARROW) {
		dir = "up"
	}
	else if(keyCode == DOWN_ARROW) {
		dir = "down"
	}
	else if(keyCode == LEFT_ARROW) {
		dir = "left"
	}
	else if(keyCode == RIGHT_ARROW) {
		dir = "right"
	}
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
	
	move_tick = move_tick - 1
	if( move_tick == 0){
		move_tick = 20
		snake.pop()
		snake.pop()
		if(dir == "up"){snake.unshift(snake[0], snake[1]-40)}
		else if(dir == "down"){snake.unshift(snake[0], snake[1]+40)}
		else if(dir == "left"){snake.unshift(snake[0]-40, snake[1])}
		else if(dir == "right"){snake.unshift(snake[0]+40, snake[1])}
	}

}
