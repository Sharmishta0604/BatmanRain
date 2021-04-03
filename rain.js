class Drops{
    constructor(x,y){
        var options={
            restitution:0.3
            //isStatic:false
            //friction:1
        }

    this.body=Bodies.circle(x,y,10,options);
    this.radius=10;
    this.color=color(163,200,230);
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
              fill(this.color);
              ellipseMode(RADIUS);
              ellipse(0, 0, 1, 3);
              console.log(this.body.position.y);
              pop();
    }
    }

