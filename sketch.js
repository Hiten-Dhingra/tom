var background , backImg;

function preload() {
    //load the images here
    backImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    background=createSprite(200,200,1000,800);
    background=addImage(backImg);
    //create tom and jerry sprites here

}

function draw() {

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
