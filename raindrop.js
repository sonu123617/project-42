class Rain{
    constructor(x, y, r){
        var options = {
            restitution: .5
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0, 0, 170);
        ellipse(0, 0, this.r * 2);
        pop();
    }
    isOffScreen(){
        var pos = this.body.position;
        return (pos.y > height);    
    }
    removeFromWorld(){
        World.remove(world, this.body);
    }
}