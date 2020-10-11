class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.ground=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.ground);
    }
    display(){
        var pos=this.ground.position;
        var angle=this.ground.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }

}