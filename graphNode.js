class GraphNode{
    constructor(destiny, directDistance, realDistance, fronteira, cor){
        //console.log(realDistance, cor);
        //String do destino
        this.destiny = destiny;
        
        //Distância direta
        this.directDistance = directDistance;

        //Distância real
        this.realDistance = realDistance;

        //"Nível" da árvore, variável que vai ser usada pra guardar o caminho final
        this.fronteira = fronteira;

        //Cor da linha
        this.cor = cor;
    }

    // Função pra somar;
    getDistancesSum(){
        return this.directDistance+this.realDistance;
    }
};