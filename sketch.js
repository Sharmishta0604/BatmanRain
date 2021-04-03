const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops=[];
//var maxdrops=100;
var man;
var thunder;


function preload(){
  light1=loadImage("images/thunderbolt/1.png"); 
  light2=loadImage("images/thunderbolt/2.png"); 
  light3=loadImage("images/thunderbolt/3.png"); 
  light4=loadImage("images/thunderbolt/4.png");  
}

function setup(){
    var canvas=createCanvas(400,500);
    
    engine = Engine.create();
    world = engine.world;
   
      

    man=new Umbrella(200,400);
   
    
    /*for(var i=0;i<maxdrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }*/
    
}

function draw(){
    background("black");
    Engine.update(engine);
    if(frameCount%1===0){
        drops.push(new Drops(random(10,390),-10));
      }

      for(var i=0;i<drops.length;i++){
        drops[i].display();
    }

    for(var i=0;i<drops.length;i++){
    if(drops[i].body.position.y>500){
        drops[i].body.position.y=-10;
        drops[i].body.position.x=random(0,400);

    }}

    if(frameCount%120===0){
       
       thunder=createSprite(random(10,390),100,40,60);
    thunder.scale=0.5;
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage(light1);
        break;
        case 2: thunder.addImage(light2);
        break;
        case 3: thunder.addImage(light3);
        break;
        case 4: thunder.addImage(light4);
        break;
        
    }
       drawSprites();
       thunder.destroy();
    }

       
        
        man.display();
    }   

