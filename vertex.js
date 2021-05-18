class Vertex {
	constructor(name, posX, posY) {
		this.name = name;
		this.visited = false;
        this.posX = posX;
        this.posY = posY;
        this.radius = 30;
	}

    draw(){
        stroke(255, 0, 255);
        strokeWeight(1);
        fill(0);
        circle(this.posX, this.posY, this.radius);
        textSize(15);
        text(this.name, this.posX+20, this.posY+30);
    }
}
