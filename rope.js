class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 200,
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
  
    display() {
      if (this.rope.bodyA) {
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push();
  
        
        stroke("white")
        strokeWeight(6);
  
        line(posB.x, posB.y,posA.x, posA.y);
  
        pop();
      }
    }
  }
  