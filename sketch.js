var object1,object2,object3,object4;
var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 80, 30);
 movingrect.shapeColor = "yellow";
 fixedrect = createSprite(200,200,50,50);
 fixedrect.shapeColor = "yellow";
 object1=createSprite(100,200,80,30);
 object2=createSprite(300,200,80,30);
 object3=createSprite(500,200,80,30);
 object4=createSprite(600,200,80,30);
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

 if( isTouching(object3,movingrect)){
     movingrect.shapeColor="red";
     object3.shapeColor="red";
 }
  else{
        movingrect.shapeColor="yellow";
        object3.shapeColor="yellow";
  }
  drawSprites();
}
