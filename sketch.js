var fixed;
var moving;
var wall1;
var wall2;
var wall3;
var wall4;

var bullet;
var car2;
var car3;
var car4;

var speed;
var weight;
var thickness;

function setup() {
  createCanvas(windowWidth,windowHeight + 120);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  
  //moving = createSprite(200, 250, 50, 50);
  //fixed = createSprite(200,200,50,50)
  bullet = createSprite(200, 100, 40, 20);
  car2 = createSprite(200, 300, 50, 30);
  car3 = createSprite(200, 500, 50, 30);
  car4 = createSprite(200, 700, 50, 30);

  wall1 = createSprite(width - 100,100, thickness,90)
  wall2 = createSprite(width - 100,300,20,70)
  wall3 = createSprite(width - 100,500,20,70)
  wall4 = createSprite(width - 100,700,20,70)
  
  wall1.shapeColor = 80,80,80;
  //fixed.shapeColor = "green";

  bullet.shapeColor = "white";
  car2.shapeColor = "green";
  car3.shapeColor = "green";
  car4.shapeColor = "green";

  //     wall1.debug = true;
  //bullet.debug = true;
}

function draw() {0
  background(0); 

  

  bullet.velocityX = speed;

  ddeformation()
  fill("white")
  text("Speed: " + Math.round(speed),200,50)
  text("Weight: " + Math.round(weight),300,50)
  text("Thickness: " + Math.round(thickness),400,50)
  drawSprites();
}

function ddeformation(){
  if(wall1.x - bullet.x < (bullet.width + wall1.width)/2){
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

    if(deformation>10){
      wall1.shapeColor = "red";
    }

    if(deformation<=10){
      wall1.shapeColor = "green";
    }

    fill("white")
    text("Deformation report: " + deformation,500,50)

  }

}