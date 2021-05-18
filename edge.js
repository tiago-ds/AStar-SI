class Edge {
	constructor(vertexOrigin, vertexDestiny, origin, destiny, realDistance, directDistance, color) {
		this.vertexOrigin = vertexOrigin;
		this.vertexDestiny = vertexDestiny;
        this.origin = origin;
        this.destiny = destiny;
		this.directDistance = directDistance;
		this.realDistance = realDistance;
		this.color = color;
	}

	getDistancesSum() {
        return this.directDistance + this.realDistance;
	}

    draw(strk){
        strokeWeight(strk);
        line(this.origin.posX, this.origin.posY, this.destiny.posX, this.destiny.posY)
    }
}
