var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.color(80,80,80);
  
  speed = random(55,90);
  weight = random(400,1500);

  deformation = 0.5 * weight * speed * speed / 22500;
}

function draw() {
  background(255,255,255);  

if(car.collide(wall) && deformation < 100) {
  car.shapeColor = "green";
}

if(car.collide(wall) && deformation > 100 && deformation < 180) {
  car.shapeColor = "yellow";
}

if(car.collide(wall) && deformation > 180) {
  car.shapeColor = "red";

  drawSprites();
}
}