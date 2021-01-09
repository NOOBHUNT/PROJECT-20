var tom ,jerry;
var  tom_sitting,tom_running, tom_collided;
var jerry3,jerry4
var bg;


function preload() {
    //load the images here
    tom_sitting= loadImage("images/tomOne.png");
    tom_running= loadImage("images/tomTwo.png");
    tom_collided= loadImage("images/tomfour.png");

    jerry3=loadImage("images/jerryThree.png");
    jerry4=loadImage("images/jerryFour.png");

    bg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(700,600,90,80);
    tom.addImage("tomOne.png",tom_sitting);
    tom.scale=0.2;

    jerry = createSprite(300,600,90,80);
    jerry.addImage("jerryThree.png",jerry3)
    jerry.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.changeanimation("tomTwo.png",tom_running)
}else{
tom.velocityX=0;
}
if(keyCode===RIGHT_ARROW){
    tom.velocityX=5;
}
if(tom.isTouching(jerry)){
tom.changeanimation("tomFour.png");
jerry.changeanimation("jerry4");

}
}




