class Station{
    constructor(name, posX, posY){
        //String do destino
        this.name = name;
        this.posX = posX;
        this.posY = posY;    
    }

    draw(){
        circle(this.posX, this.posY, 50);
        textSize(20);
        text(this.name, this.posX-(50/4), this.posY+(50/5));
    }
};