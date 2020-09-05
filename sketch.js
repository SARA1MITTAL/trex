var trex, ground, invisableG, trex_collide, trex_running, ground_image

function preload(){
trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collide=loadImage("trex_collided.png");
ground_image=loadImage("ground2.png");
}


function setup() {
  createCanvas(600, 200);
  
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  
  invisableG=createSprite(200,190,400,20);
  invisableG.visible=false;
  
  
  ground=createSprite(200,180,400,20);
  ground.addImage("ground", ground_image);
  ground.velocityX=-4;
  
}

function draw() {
  background(220);
  
  if(keyDown("space")){
     trex.velocityY=-10;
     }
  trex.velocityY=trex.velocityY+0.8;
  if (ground.x<0){
  ground.x=ground.width/2;  
    
  }
  
  trex.collide(invisableG);
  

 drawSprites(); 
  
}