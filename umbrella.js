class Umbrella{
constructor(x,y)
{
    var options={
        isStatic:true,
        visibility:false,
        //restitution:0.3,
        friction:0.5
        
    }
    this.body=Bodies.circle(x,y,100,options);
    this.image=loadImage("images/Walking Frame/walking_8.png");
    this.radius=100;
   // this.color="blue";
    
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
              
        
              
        //ellipse(200, 390, 150, 200);
        imageMode(CENTER);
         image(this.image, 190, 390, 250, 250);
    }
    }


