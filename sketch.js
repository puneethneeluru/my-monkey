
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var ground
var obstacle
function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  
  foodGroup=new Group();
   obstacleGroup=new Group();
  
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }


}

function draw() {
createCanvas(400,400)
  
  background("white")
    
 if(keyDown("space")&&monkey.y >= 159 ) {
      monkey.velocityY = -12;
    }
 monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);

  if (foodGroup.isTouching(monkey)){
  banana.destroy();
  }
  
  
  
  spawnBananas();
  spawnObstacles();

 if(obstacleGroup.isTouching(monkey)){
  
   background("black")
   stroke("yellow")
    fill("red")
    text("GAME OVER", 160,200)
   textSize=100
  monkey.destroyEach();
 bananaGroup.destroyEach();
obstacleGroup.destroyEach();
 
 }

  
  
  
 
  drawSprites();

stroke("black")
textSize=20
fill("black")
survivalTime=Math.round(frameCount/frameRate())
text("Survival Time:"+survivalTime+1,100,50)

}
function spawnBananas (){
  
  if(frameCount%80===0){
   banana=createSprite(400,200,10,10 )
banana.y=Math.round(random(110,200))
    banana.addImage("food",bananaImage); 
    banana.velocityX=-6
   banana.scale=0.1
  foodGroup.add(banana);
}

  
  
  
}

function spawnObstacles (){
  
  if(frameCount%300===0){
 obstacle  =createSprite(250,310,200,200) 
obstacle.addImage("obstacle",obstacleImage); 
  obstacle.velocityX=-6
    obstacle.scale=0.2
obstacleGroup.add(obstacle)}
}