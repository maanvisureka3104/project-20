var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="black";
  thickness=random(22,83);
  speed=random(223,321); 
  weight=random(30,52);
  //damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background("white"); 
  bullet.velocityX=speed;
  
    if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage<10){
     wall.shapeColour="green"
     }
     if(damage>10){
     wall.shapeColor="red"
     }
    }
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
 return false
}
