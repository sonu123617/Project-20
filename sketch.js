var wall;
var car;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500, 200, 10, 100);

  speed = random(55, 90);
  weight = random(400, 1500); 

  car = createSprite(50, 200, 25, 15);
  car.velocityX = speed;

  deformation = Math.round(0.5*weight*speed*speed/22500);
}

function draw() {
  background(0, 0, 0);  

  wall.shapeColor = color(255, 255, 255);

  car.collide(wall);

  if(deformation > 0 && deformation < 100)
  {
     car.shapeColor = color("green");
  }

  if(deformation > 100 && deformation < 180)
  {
     car.shapeColor = color("yellow");
  }
  else if(deformation > 180)
  {
      car.shapeColor = color("red");
  }

  drawSprites();

  textSize(25);
  fill("white");
  text("Deformation = " + deformation, 650, 200);
}