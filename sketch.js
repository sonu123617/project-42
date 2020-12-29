var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;

var drops = [];
var raindrop;

var umb;

var l1, l2, l3, l4;
var lighting;

var walkAnimation;

function preload(){
    l1 = loadAnimation("1.png")
    l2 = loadAnimation("2.png")
    l3 = loadAnimation("3.png")
    l4 = loadAnimation("4.png")
    walkAnimation = loadAnimation("walking_8.png", "walking_8.png", "walking_7.png", "walking_7.png", "walking_6.png", "walking_6.png", "walking_5.png", "walking_5.png", "walking_4.png", "walking_4.png", "walking_3.png", "walking_3.png", "walking_2.png", "walking_2.png", "walking_1.png", "walking_1.png");
}

function setup(){
   createCanvas(800, 1200);
    
   engine = Engine.create();
   world = engine.world;

   umb = new umbrella();
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    frameRate(240);
    animation(walkAnimation, 380, 800, 1, 1);
    if(frameCount % 1 === 0){
        raindrop = new Rain(random(10, 1190), -200, 2.5);
        drops.push(raindrop);
    }
    if(frameCount % 1 === 0){
        raindrop = new Rain(random(10, 1190), -200, 2.5);
        drops.push(raindrop);
    }
    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        if(drops[i].isOffScreen()){
            drops[i].removeFromWorld();
            drops.splice(i, 1);
            i--;
        }
    }
    if(frameCount % 100 === 0){
        var rand = Math.round(random(1, 4));
        switch(rand){
            case 1: animation(l1, 400, 200, 10, 10);
                break;
            case 2: animation(l2,400,100,10,10);
                break;
            case 3: animation(l3,400,100,10,10);
                break;
            case 4: animation(l4,400,100,10,10);
                break;
        }
    }
}   

