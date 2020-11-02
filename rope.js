class rope {
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointA: {x:this.offsetX, y:this.offsetY},
            
             
        }
        this.bodyB = bodyB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        strokeWeight(3);
        stroke('black');
        line(posA.x,posA.y-25,this.bodyB.position.x+this.offsetX,this.bodyB.position.y + this.offsetY)
    }

}