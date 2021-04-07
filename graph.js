class Graph{
    constructor(){
        this.vertexMap = new Map();
        this.edgeMap = new Map();
    }

    addVertex(vertexName){
        let vertex = new Vertex(vertexName);
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

    addEdge(vertexOrigin, vertexDestiny, realDistance, directDistance, color){
        if(!this.vertexMap.has(vertexOrigin) && !this.vertexMap.has(vertexDestiny))
            return;

        var originToDestiny = new Edge(vertexOrigin, vertexDestiny, realDistance, directDistance, color);

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