class Edge {
	constructor(vertexOrigin, vertexDestiny, realDistance, directDistance, color) {
		this.vertexOrigin = vertexOrigin;
		this.vertexDestiny = vertexDestiny;
		this.directDistance = directDistance;
		this.realDistance = realDistance;
		this.color = color;
	}

	getDistancesSum() {
		return this.directDistance + this.realDistance;
	}
}
