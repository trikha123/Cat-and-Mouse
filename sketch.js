
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("tomSleeping",tomImg1)
    tom.scale = 0.1
    jerry = createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryImg1)
    jerry.scale = 0.1

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.addAnimation("tomLastImage",tomImg3)
        tom.x =300
        jerry.addAnimation("jerryLastImage",jerryImg3)

    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5
        tom.addAnimation ("tomRunning", tomImg2)
        jerry.addAnimation("jerryTeasing", jerryImg2)
        jerry.frameDelay = 25
    }
    

  //For moving and changing animation write code here


}
