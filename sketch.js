var car, wall, speed, weight;


function setup() {
  createCanvas(1600,400);

  //assigning random values to speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);

  //creating car sprite 
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  //creating wall sprite
  wall = createSprite(1300, 200, 60, height/2);
  wall.shapeColor=color(80, 80, 80);
}

function draw() {
  background(255,255,255);
    
  
  //detecting collision of the car
  if(car.collide(wall)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/ 22500;

    if (deformation < 100){
      car.shapeColor = "green";
    }

    if (deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }

    if (deformation > 180){
      car.shapeColor = "red";
    }
  }
  
  drawSprites();
}