
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
  
  //control vars
  dir = "up"
  
  //time vars
  difficulty = 10
  game_speed = difficulty
  move_tick = game_speed
  add_seg = false
}

  //key controls
  function keyPressed() {
    	if(live){
        
        //snake controls
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
      }else{
        //restart (reinit vars)
        points = 0
        apple_pos = [500, 180]
        live = true 
        dir = "up"
        game_speed = difficulty
        snake = [500, 340,
           500, 380,
           500, 420,
           500, 460,
           500, 500,
           500, 540]
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
  
  //text
  textSize(35)
  fill(200,200,200)
  text("Points: " + points, 45, 73) 
  
  //apple graphics
  fill(255,0,0)
  rect(apple_pos[0]-20, apple_pos[1]-20, 40, 40) 
  
  //snake graphics
  
  //body
  fill(150,150,150)
  for(i = snake.length; i > 0; i -= 2){
  	rect(snake[i]-20, snake[i+1]-20, 40, 40)
  }
  
  //head
  fill(50,50,200)
	rect(snake[0]-20, snake[1]-20, 40, 40)

  //green
  fill(50,200,50)  
  for(i = 2; i < snake.length; i += 8){
  	rect(snake[i]-10, snake[i+1]-10, 20, 20)
  }
  
  //yellow
  fill(250,250,50)  
  for(i = 6; i < snake.length; i += 8){
  	rect(snake[i]-10, snake[i+1]-10, 20, 20)
  }
  
  //death screen
  if(live == false){
    textSize(50)
    fill(255,255,255,100)
    rect(0,0,1000,800)
    fill(0,0,0)
  	text("             You died! \n Press any key to restart.", 220, 357) 
  }
 
	//snake collisions
  
  //apple
  if(snake[0] == apple_pos[0] && snake[1] == apple_pos[1]){
  	apple_pos = [round(random(0,24))*40 + 20, round(random(0,19))*40 + 20]  	 
    add_seg = true
  }
  
  //snake
  for(i = snake.length; i > 0; i -= 2){
  	if(snake[0] == snake[i] && snake[1] == snake[i+1]){
       live = false
       break
    }
  }
  
  //snake movement  
  
  //boundary collison
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
  
  //update snake
  if(move_tick == game_speed && live == true){
    
    //collect apple, add segment, possibly increase speed
    if(add_seg == true){
      add_seg = false
      
      if(random(0,1) > 0.7 && game_speed > 2){
      	game_speed -- 
      }
      points ++
      
    }else{
      snake.pop()
      snake.pop() 
    }
    
    //movement
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

  //time
  move_tick --;
  if (move_tick == 0){
     move_tick = game_speed
  }
}
