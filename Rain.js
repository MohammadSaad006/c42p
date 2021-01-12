class Rain {
    constructor(x,y,radius) {
        var options= {
            isStatic:false
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
        fill (38,126,181)
        ellipse(b1pos.x,b1pos.y,10,10);
        pop()
    }
}

