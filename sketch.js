var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImage;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImage = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(displayWidth,displayHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if((keyDown("UP_ARROW")||touches.length>0)&& player.y>350){
  player.y = player.y-30
}
if((keyDown("DOWN_ARROW")||touches.length>0)&& player.y<displayHeight){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnzombie()
drawSprites();

}



function spawnzombie(){
  if (frameCount%300===0){
  var zombie = createSprite(width,height/2)
  zombie.addImage(zombieImage)
  zombie.scale = 0.3
  zombie.velocityX = -2
  }
}