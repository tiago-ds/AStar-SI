function heuristic(graph, startVertex, endVertex) {
	

	let closedEdges = [];

	let heap = new MinHeap();

	graph.visitVertex(startVertex);

	let directDistance = graph.getDirectDistance(startVertex, endVertex);
	let realDistance = graph.getRealDistance(startVertex, startVertex);
	let origin = graph.getVertex(startVertex);
	let destiny = graph.getVertex(startVertex);
	helperEdge = new Edge(
		startVertex,
		startVertex,
		origin,
		destiny,
		realDistance,
		directDistance,
		null
	);
    if (startVertex == endVertex) return [helperEdge];
	heap.insert(helperEdge);

	let current;
	while (heap.size() >= 1) {
		current = heap.remove();

		closedEdges.push(current);
		if (current.vertexDestiny == endVertex) {
			closedEdges.splice(0, 1);
			return closedEdges;
		}

		graph.visitVertex(current.vertexDestiny);
		fronteiras = graph.getAdjacentEdges(current.vertexDestiny);
		for (const edge of fronteiras) {
			if (closedEdges.includes(edge)) continue;
			if (!graph.isVertexVisited(edge.vertexDestiny)) {
				graph.visitVertex(edge.vertexDestiny);

				let directDistance = graph.getDirectDistance(
					edge.vertexDestiny,
					endVertex
				);
				let realDistance =
					graph.getRealDistance(
						current.vertexDestiny,
						edge.vertexDestiny
					) +
					current.realDistance +
					(current.color != null &&
						edge.color != null &&
						current.color[0] != edge.color[0] &&
						current.color[1] != edge.color[1] &&
						current.color[2] != edge.color[2]
						? 0
						: 4);

				let origin = graph.getVertex(current.vertexDestiny);
				let destiny = graph.getVertex(edge.vertexDestiny);
				helperEdge = new Edge(
					current.vertexDestiny,
					edge.vertexDestiny,
					origin,
					destiny,
					realDistance,
					directDistance,
					graph.getRealEdgeColor(
						current.vertexDestiny,
						edge.vertexDestiny
					)
				);
				heap.insert(helperEdge);
			}
		}
	}

	return closedEdges;
}
var stationsGraph;

function startGraph() {
	stationsGraph = new Graph();

	for (let indexOrigin = 0; indexOrigin < 14; indexOrigin++) {
		let station = data.estacoes[indexOrigin];
		stationsGraph.addVertex(station.nome, station.posX, station.posY);
	}

	for (let indexOrigin = 0; indexOrigin < 14; indexOrigin++) {
		const directOrigin = data.direta[indexOrigin];
		const realOrigin = data.real[indexOrigin];
		for (let indexDestiny = 1; indexDestiny <= 14; indexDestiny++) {
			const directDestiny = directOrigin["E" + indexDestiny];
			const realDestiny = realOrigin["E" + indexDestiny];
			const realDistance = !isNaN(parseFloat(realDestiny))
				? parseFloat(realDestiny)
				: null;
			const directDistance = parseFloat(directDestiny);
			if (realDistance != null) {
				let color =
					data.realEdgesColors[directOrigin.station][
						"E" + indexDestiny
					];
				stationsGraph.addEdge(
					directOrigin.station,
					"E" + indexDestiny,
					realDistance,
					directDistance,
					color
				);
			} else {
				stationsGraph.addEdge(
					directOrigin.station,
					"E" + indexDestiny,
					realDistance,
					directDistance,
					null
				);
			}
		}
	}
}

function walkThePath(aStarResult){
	path = [];
    path.push(aStarResult[0]);

	for (let index = 1, index2 = 0; index < aStarResult.length; index++) {
        let previous = path[index2];
		let current = aStarResult[index];
		if (previous.vertexDestiny == current.vertexOrigin) {
			path.push(current);
            index2 += 1;
		}
	}

    if(path[0] == aStarResult[0] && path[path.length-1] != aStarResult[aStarResult.length-1]){
        path = [];
        for (let index = 0; index < aStarResult.length - 1; index++) {
            let current = aStarResult[index];
            let next = aStarResult[index + 1];

            if (next.vertexOrigin == current.vertexDestiny) {
                path.push(current);
            }
        }
        path.push(aStarResult[aStarResult.length - 1])
    }
    
    return path;
}