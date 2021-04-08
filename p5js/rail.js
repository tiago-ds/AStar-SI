class Rail{
    constructor(stationA, stationB, desenhar){
        this.stationA = stationA;
        this.stationB = stationB;
        this.desenhar = desenhar;
    }

    draw(color){
        strokeWeight(3);
        stroke(color);
        this.desenhar();
    }
    
}