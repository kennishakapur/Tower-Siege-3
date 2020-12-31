class Box{
  constructor(x, y){
    var options={
      restitution:0.1,
      density:1.2,
      friction:1.5,
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    this.visibility=255;
    World.add(world,this.body)
  }

  score(){
    if(this.visibility<0 && this.visibility>-1005){
      score++
    }
  }


  display(){
    if(this.body.speed < 3) {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,30,40);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility - 5;
    tint(255, this.visibility);
    //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
}

}