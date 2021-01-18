var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(790,100,30,80);
    block1.shapeColor = rgb(0,0,255);
    
    block2 = createSprite(790,200,30,80);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(790,300,30,80);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(790,400,30,80);
    block4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = rgb(255,128,0);
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
