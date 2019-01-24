function setup() {  
  //mandatory lines
  noStroke()
  createCanvas(1000, 800);

	//snake array, organized by center x and y coords of each square
  snake = [500, 340,
           500, 380,
           500, 420,
           500, 460,
           500, 500,
           500, 540]
  
  apple_pos = [500, 180]

  //control variables
  dir = "up"
	move_tick = 10
  add_seg = false
  live = true


}
	
//key controls
function keyPressed() {
        
        //link keys to variable
        if (keyCode === UP_ARROW && dir != "down"){
          dir = "up"
        }
        if (keyCode === DOWN_ARROW && dir != "up"){
          dir = "down"
        }
        if (keyCode === RIGHT_ARROW && dir != "left"){
          dir = "right"
        }
        if (keyCode === LEFT_ARROW && dir != "right"){
          dir = "left"
        }
}

//draw loop!
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
  
  fill(255,0,0)
 rect(apple_pos[0]-20, apple_pos[1]-20, 40, 40) 


  
  //snake graphics
  fill(150,150,150)
  for(i = snake.length; i > 0; i -= 2){
  	rect(snake[i]-20, snake[i+1]-20, 40, 40)
  }

  //snake movement  
  if(move_tick == 10){
    	
    //always delete the last two positions 
    if (add_seg == false){

      snake.pop()
      snake.pop() 
    }
    add_seg = false
    
    if(snake[0] == -20){
    live = false  
  }else if(snake[0] == 1020){
    live = false  
  }

    
    if(snake[1] == -20){
    live = false  
  }else if(snake[1] == 820){
    live = false  
  }


    
    //movement, link dir variable to snake array
    if(dir == "up"){
			snake.unshift(snake[0], snake[1]-40)
    }else if(dir == "down"){
			snake.unshift(snake[0], snake[1]+40)
    }else if(dir == "right"){
			snake.unshift(snake[0]+40, snake[1])
    }else{
      //left
			snake.unshift(snake[0]-40, snake[1])
    }
  }
  
  if(snake[0] == apple_pos[0] && snake[1] == apple_pos[1]) {
	apple_pos = [round(random(0,24))*40 + 20, round(random(0,19))*40 + 20]  
	add_seg = true
  }


  //tick snake movement
  move_tick --;
  if (move_tick == 0){
     move_tick = 10
  }

}
