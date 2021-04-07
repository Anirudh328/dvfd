var car,wall;
var speed,weight;
var car3,wall3;
var car2,wall2;
var car1,wall1;

function setup() {
  
  createCanvas(1600,800);

  car = createSprite(50,100,15,15);
  car1 = createSprite(50,300,15,15);
  car2= createSprite(50,500,15,15);
  car3 = createSprite(50,700,15,15);
  wall = createSprite(1500,100,15,100);
  wall1 = createSprite(1500,300,15,100);
  wall2 = createSprite(1500,500,15,100);
  wall3 = createSprite(1500,700,15,100);
}



function draw() {
  background(0);  
  speed =random(55,90);
  weight = random(400,1500)
  car.velocityX = speed;
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);

    }
  }
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car1.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car1.shapeColor = color(0,255,0);

    }
  }
  if(wall2.x-car2.x<(car2.width+wall2.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car2.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car2.shapeColor = color(0,255,0);

    }
  }
  if(wall3.x-car3.x<(car3.width+wall3.width)/2){
    car3.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car3.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car3.shapeColor = color(0,255,0);

    }
  }
  drawSprites();
}