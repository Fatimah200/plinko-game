class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=r;
		this.plinko=Bodies.circle(this.x, this.y,this.r/2 ,options);
        World.add(world, this.plinko);
    }
    display(){
        var plinkopos=this.plinko.position;
			push()
			translate(plinkopos.x,plinkopos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
            fill(255,255,255)
			ellipse(0,0,this.r, this.r);
            pop()
            
            for(var j=40;j<=width;j=j+50){
                plinkos.push(new Plinko(j,75));
            }

            for(var j=15;j<=width-10;j=j+50){
                plinkos.pudh(new Plinko(j,175));
            }
			
    }
}

