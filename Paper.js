class Paper  {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
         }
         this.image= loadImage("paper ball.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }

    display(){

        var paperPos = this.body.position

        push()
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER);
        stroke("white");
        fill("white");
        //ellipse(0,0, this.r, this.r);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }

}