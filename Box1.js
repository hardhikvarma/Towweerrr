class Box1{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.width = 50;
        this.height = 700;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        rect(0, 0, 50, 50);
        pop();
    }
  }