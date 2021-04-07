class GraphNode{
    constructor(destiny, directDistance, realDistance, fronteira){
        //String do destino
        this.destiny = destiny;
        
        //Distância direta
        this.directDistance = directDistance;

        //Distância real
        this.realDistance = realDistance;

        this.fronteira = fronteira;
    }

    getDistancesSum(){
        return this.directDistance+this.realDistance;
    }
};