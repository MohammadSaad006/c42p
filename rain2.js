class Rain1 {
    constructor(x,y,radius) {
        var options= {
            isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        var b1pos=this.body.position
       // b1pos.x=mouseX
        //b1pos.y=mouseY
        push()
        ellipseMode(CENTER);
        fill (0)
        ellipse(b1pos.x,b1pos.y,10,10);
        pop()
    }
}

