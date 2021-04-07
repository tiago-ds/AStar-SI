class Rail{
    constructor(stationA, stationB){
        this.stationA = stationA;
        this.stationB = stationB;
    }

    draw(strk){
        strokeWeight(strk);
        line(this.stationA.posX, this.stationA.posY, this.stationB.posX, this.stationB.posY)
    }
}