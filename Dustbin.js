class Dustbin {
    constructor(x,y) {
       
         this.x=x;
         this.y=y;
         this.dustbinWidth = 200;
         this.dustbinHeight = 100;
         this.dustbinThickness = 20;
         this.image= loadImage("dustbin.png");
        
         this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinThickness, {isStatic:true});
         this.leftBody = Bodies.rectangle(this.x- this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.dustbinThickness, this.dustbinHeight,{isStatic:true})
         Matter.Body.setAngle(this.leftBody, this.angle);
         this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.dustbinThickness, this.dustbinHeight, {isStatic:true})
         Matter.Body.setAngle(this.leftBody, -1 * this.angle)
         World.add(world, this.bottomBody);
         World.add(world, this.leftBody);
         World.add(world, this.rightBody);
    }
 
       display(){

        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;

                
         push();
         translate(bottomPos.x, bottomPos.y);
         rectMode(CENTER);
         angleMode(RADIANS);
         rotate(this.angle);
         fill("green");
         stroke("red");
         //rect(0, 0, this.dustbinWidth, this.dustbinThickness);
         pop();

         push();
         translate(leftPos.x, leftPos.y);
         rectMode(CENTER);
         angleMode(RADIANS);
         rotate(this.angle);
         fill("green");
         stroke("red");
         //rect(0, 0, this.dustbinThickness, this.dustbinHeight);
         pop();

         push();
         translate(rightPos.x, rightPos.y);
         rectMode(CENTER);
         angleMode(RADIANS);
         rotate(-1 * this.angle);
         fill("green");
         stroke("red");
         //rect(0, 0, this.dustbinThickness, this.dustbinHeight);
         image(this.image, 0, 0, this.width, this.height);
         pop();
       }
        
}