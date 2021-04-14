var player, enemy1,enemy2,enemy3;
var laser,backgroundImg,laserImage;
var playerImg,enemy1Img,enemy2Img,enemy3Img;

function preload(){
  playerImg=loadImage("image/player 1.png");
  backgroundImg=loadImage("image/Background.jpg")
  enemy1Img=loadImage("image/enemy 1.png");
  enemy2Img=loadImage("image/enemy 2.png");
  enemy3Img=loadImage("image/enemy 3.png");
  laserImage=loadImage("image/laser.png");
}

function setup() {
 createCanvas(800,550);
 player=createSprite(400,450,30,30);
 player.addImage(playerImg);
 player.scale=0.35;
  
 laserGroup=new Group();
 enemy1Group=new Group();
 enemy2Group=new Group();
 enemy3Group=new Group();
}

function draw() {
  background(backgroundImg); 

if(keyDown(LEFT_ARROW)){
   player.x=player.x-4.5;
}
if(keyDown(RIGHT_ARROW)){
   player.x=player.x+4.5;
}
if (keyDown("space")) {
   createlaser();
}
if(laserGroup.isTouching(enemy1Group)){
  enemy1.destroy();
  laserGroup.destroyEach();
}
if(laserGroup.isTouching(enemy3Group)){
  enemy3.destroy();
  laserGroup.destroyEach();
}

spawnenemy();
drawSprites();
}

 function createlaser() {
    laser= createSprite(400, 400, 7, 25);
    laser.addImage(laserImage);
    laser.x=player.x;
    laser.velocityY = -4;
    laser.scale = 0.06;
    laser.lifetime=100  ;
    laserGroup.add(laser);
    laserGroup.add(laser);
}

function spawnenemy(){
  if(frameCount%150===0){
    enemy1=createSprite(random(5,750),30,30)
    enemy1.velocityY=1.9;
    enemy1.addImage(enemy1Img);
    enemy1.scale=0.07

    enemy1.lifetime=400;
    player.depth=enemy1.depth+1;
    
    enemy1Group.add(enemy1);
  }
  if(frameCount%700===0){
     enemy2=createSprite(random(5,750),30,30)
     enemy2.velocityY=0.5;
     enemy2.addImage(enemy2Img);
     enemy2.scale=0.2
    
     enemy2.lifetime=1600;
     player.depth=enemy2.depth+1;
    
     enemy2Group.add(enemy2);
  }
     
  if(frameCount%190===0){
    enemy3=createSprite(random(5,750),30,30)
    enemy3.velocityY=1.5;
    enemy3.addImage(enemy3Img);
    enemy3.scale=0.06
    
    enemy3.lifetime=600;
    player.depth=enemy3.depth+1;
   
    enemy3Group.add(enemy3);
  }
  }
