class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.particle=Bodies.circle(this.x, this.y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.particle);
    }
    display(){
        var particlepos=this.particle.position;
			push()
			translate(particlepos.x,particlepos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			ellipse(0,0,this.r);
			pop()
    }
}