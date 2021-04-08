class Station{
    constructor(name, posX, posY){
        //String do destino
        this.name = name;
        this.posX = posX;
        this.posY = posY; 
        this.rails = [];
    }

    draw(){
        strokeWeight(1);
        stroke(0);
        circle(this.posX, this.posY, 15);
        strokeWeight(0.5);
        textSize(8);
        text(this.name, this.posX -(24/4), this.posY + (15/5));
    }

    addRail(destiny, f){
        this.rails.push({d:destiny, f:f});
    }
};