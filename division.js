class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.division=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.division);

    }
    display(){
        var pos=this.division.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);

       
    }
}