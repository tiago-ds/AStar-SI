function aStar(graph, startVertex, endVertex){

    let heap = new MinHeap();

    graph.visitVertex(startVertex);

    let fronteiras = graph.getAdjacentEdges(startVertex);
    
    for(const edge of fronteiras){
            graph.visitVertex(edge.vertexDestiny);
            let directDistance = graph.getDirectDistance(startVertex , edge.vertexDestiny);
            let realDistance = graph.getRealDistance(startVertex , edge.vertexDestiny);
            graph.updateVertexFrontier(edge.vertexDestiny, 1);
            helperEdge = new Edge(startVertex, edge.vertexDestiny, realDistance, directDistance);
            heap.insert(helperEdge);
    }

    let fronteiraCounter;
    let caminho = [new Vertex(startVertex)]
    
    let atual = null;
    while(heap.size() >= 1 && (atual == null || atual.vertexDestiny != endVertex)){
        const arr = [...heap.heap];
        console.log(arr);
        atual = heap.remove();


        let currentFrontier = graph.getVertexFrontier(atual.vertexDestiny);
        caminho.splice(currentFrontier);
        caminho.push(new Vertex(atual.vertexDestiny));
        fronteiraCounter = currentFrontier + 1;
        console.log(caminho);


        console.log('indo para ' + atual.vertexDestiny);
        graph.visitVertex(atual.vertexDestiny);
        fronteiras = graph.getAdjacentEdges(atual.vertexDestiny);
        for(const edge of fronteiras){
            if(!graph.isVertexVisited(edge.vertexDestiny)){
                graph.visitVertex(edge.vertexDestiny);

                graph.updateVertexFrontier(edge.vertexDestiny, fronteiraCounter);

                let directDistance = graph.getDirectDistance(edge.vertexDestiny, endVertex);
                let realDistance = graph.getRealDistance(atual.vertexDestiny, edge.vertexDestiny) + atual.realDistance;
                helperEdge = new Edge(atual.vertexDestiny, edge.vertexDestiny, realDistance, directDistance);
                heap.insert(helperEdge);
            }
        }
    }
    console.log(heap);
    return caminho;
 }

metro = new Graph();

for(let x = 1; x <= 14; x++){
    metro.addVertex('E'+ x);
}

for (let indexOrigin = 0; indexOrigin < 14; indexOrigin++) {
    const directOrigin = data.direta[indexOrigin];
    const realOrigin = data.real[indexOrigin];
    for (let indexDestiny = 1; indexDestiny <= 14; indexDestiny++) {
        const directDestiny = directOrigin['E'+indexDestiny];
        const realDestiny = realOrigin['E'+indexDestiny];
        const realDistance = (!isNaN(parseFloat(realDestiny)) ? parseFloat(realDestiny) : null);
        const directDistance = parseFloat(directDestiny);
        metro.addEdge(directOrigin.station, 'E'+indexDestiny, realDistance, directDistance);
    }
}

console.log(metro.getAdjacentEdges('E4'));
// addMetroEdges(metro);
// addDirectEdges(metro);


console.log(aStar(metro, 'E6', 'E12'));
// console.log(metro.realDistance);