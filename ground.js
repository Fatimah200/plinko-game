class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.w = w; 
      this.h = h
      this.ground = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.ground);
    }
    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };