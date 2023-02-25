class Turtle(){
    constructor(x,y){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxSpeed = 4;
        this.maxForce = 0.5;
        this.r = 16;
    }

    seek(food) {
        let force = p5.Vector.sub(food, this.pos);
        force.setMag(this.maxSpeed)
        force.sub(this.vel);
        force.limit(this.maxForce);
        return force;
    }

    applyForce(force){
        this
    }

}