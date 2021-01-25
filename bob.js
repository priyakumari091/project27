class Bob {
    constructor(x,y,r)
	{
		var options={
			"isStatic":false,
			"restitution":1,
			"friction":0,
			"density":0.8
			
			}
		this.x=x;
		
		this.r=r;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			circle(0,0,this.r);
            pop()
           // console.log(paperpos);
			
	}
}