var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50,200,150,50);
  bullet.shapeColor = "orange";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =color(80,80,80) ;

  bullet.velocityX= speed; 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.collide(wall);

  if(HasCollided<(wall,bullet))
  {
    
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor ="green" ;
    }
    
    
    if(damage<10){
      wall.shapeColor = "red";
    }

  }
  


}

function HasCollided(_LBullet,_LWall)
{
bulletRightEdge = _Lbullet.x + _Lbullet.width; 
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}