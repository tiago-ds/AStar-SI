class Graph{
    constructor(){
        this.vertexMap = new Map();
        this.edgeMap = new Map();
    }

    addVertex(vertexName, posX, posY){
        let vertex = new Vertex(vertexName, posX, posY);
        this.vertexMap.set(vertexName, vertex);
        this.edgeMap.set(vertexName, []);
    }

    visitVertex(vertexName){
        this.vertexMap.get(vertexName).visited = true;
    }

    isVertexVisited(vertexName){
        return this.vertexMap.get(vertexName).visited;
    }

    getAdjacentEdges(vertexName){
        return this.edgeMap.get(vertexName).filter((edge) => {if(edge.realDistance != null) return edge});
    }

    getEdge(vertexOrigin, vertexDestiny){
        return this.edgeMap.get(vertexOrigin).filter((edge) => {if(edge.vertexDestiny == vertexDestiny) return edge});
    }

    getVertex(vertexName){
        return this.vertexMap.get(vertexName);
    }

    addEdge(vertexOrigin, vertexDestiny, realDistance, directDistance, color){
        if(!this.vertexMap.has(vertexOrigin) && !this.vertexMap.has(vertexDestiny))
            return;
        let origin = this.getVertex(vertexOrigin);
        let destiny = this.getVertex(vertexDestiny);

        var originToDestiny = new Edge(vertexOrigin, vertexDestiny, origin, destiny, realDistance, directDistance, color);

        this.edgeMap.get(vertexOrigin).push(originToDestiny);
    }

    getVertexEdges(vertexName){
        return this.edgeMap.get(vertexName);
    }

    getRealDistance(vertexOrigin, vertexDestiny){
        if(vertexOrigin == vertexDestiny) return 0;
        else{
            let realDistance;
            for(const edge of this.getVertexEdges(vertexOrigin)){
                if(edge.vertexDestiny == vertexDestiny){
                    realDistance = edge.realDistance;
                }
            }
            return realDistance;
        }
    }

    getDirectDistance(vertexOrigin, vertexDestiny){
        if(vertexOrigin == vertexDestiny) return 0;
        else{
            let directDistance;
            for(const edge of this.getVertexEdges(vertexOrigin)){
                if(edge.vertexDestiny == vertexDestiny){
                    directDistance = edge.directDistance;
                }
            }
            return directDistance;
        }
    }

    getVertexFrontier(vertexName){
        return this.vertexMap.get(vertexName).frontier;
    }

    updateVertexFrontier(vertexName, newFrontier){
        this.vertexMap.get(vertexName).frontier = newFrontier;
    }
}