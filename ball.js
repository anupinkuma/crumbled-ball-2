class Ball{
    constructor(x,y,r){
       var option={resitution:0.4,friction:1,density:1} 
       this.body=Bodies.circle(x,y,r,option)
       this.r=r
       this.image=loadImage("paper.png");
       World.add(world,this.body);
    }


display(){
    var p=this.body.position
    push();
    translate(p.x,p.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    fill("maroon")
   image(this.image,0,0,this.r*2,this.r*2)
    pop();
}
}