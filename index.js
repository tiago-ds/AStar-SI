console.log(data);

let heap;

function aStar(graph, startVertex, endVertex){

    heap = new MinHeap();

    graph.visitVertex(startVertex);

    let fronteiras = graph.getAdjacentEdges(startVertex);
    // console.log(fronteiras);
    
    for(const edge of fronteiras){
            graph.visitVertex(edge.vertexDestiny);
            heap.insert(edge);
    }

    // let fronteiraCounter;
    
    let atual = null;
    while(heap.size() >= 1 && (atual == null || atual.vertexDestiny != endVertex)){
        const arr = [...heap.heap];
        console.log(arr);
        atual = heap.remove();
        //caminho.splice(atual.fronteira);
        //caminho.push(atual);
        console.log('indo para ' + atual.vertexDestiny);
        fronteiraCounter = atual.fronteira + 1;
        graph.visitVertex(atual.vertexDestiny);

        fronteiras = graph.getAdjacentEdges(atual.vertexDestiny);
        
        for(const edge of fronteiras){
            if(/*!heap.contains(p.destiny) && */!graph.isVertexVisited(edge.vertexDestiny)){
                graph.visitVertex(edge.vertexDestiny);
                heap.insert(edge);
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


aStar(metro, 'E1', 'E12');
// console.log(metro.realDistance);