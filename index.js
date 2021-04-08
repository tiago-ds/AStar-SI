function aStar(graph, startVertex, endVertex) {
	if (startVertex == endVertex) return [new Vertex(startVertex)];

	let heap = new MinHeap();

	graph.visitVertex(startVertex);

	let fronteiras = graph.getAdjacentEdges(startVertex);

	for (const edge of fronteiras) {
		graph.visitVertex(edge.vertexDestiny);
		let directDistance = graph.getDirectDistance(
			edge.vertexDestiny,
			endVertex
		);
		let realDistance = graph.getRealDistance(
			edge.vertexDestiny,
			endVertex
		);
		graph.updateVertexFrontier(edge.vertexDestiny, 1);
		let origin = graph.getVertex(startVertex);
		let destiny = graph.getVertex(edge.vertexDestiny);
		helperEdge = new Edge(
			startVertex,
			edge.vertexDestiny,
			origin,
			destiny,
			realDistance,
			directDistance,
			null
		);
		heap.insert(helperEdge);
	}

	let fronteiraCounter;
	let caminho = [new Vertex(startVertex)];

	let atual = null;
	while (
		heap.size() >= 1 &&
		(atual == null || atual.vertexDestiny != endVertex)
	) {
		const arr = [...heap.heap];
		console.log(arr);
		atual = heap.remove();

		let currentFrontier = graph.getVertexFrontier(atual.vertexDestiny);
		caminho.splice(currentFrontier);
		caminho.push(new Vertex(atual.vertexDestiny));
		fronteiraCounter = currentFrontier + 1;
        // const aux = [...caminho];
		// console.log(aux);

		console.log("indo para " + atual.vertexDestiny);
		graph.visitVertex(atual.vertexDestiny);
		fronteiras = graph.getAdjacentEdges(atual.vertexDestiny);
        // const aux = [...fronteiras];
        // console.log(aux);

		for (const edge of fronteiras) {
			if (!graph.isVertexVisited(edge.vertexDestiny)) {
				graph.visitVertex(edge.vertexDestiny);

				graph.updateVertexFrontier(
					edge.vertexDestiny,
					fronteiraCounter
				);

				let directDistance = graph.getDirectDistance(
					edge.vertexDestiny,
					endVertex
				);
				let realDistance =
					graph.getRealDistance(
						atual.vertexDestiny,
						edge.vertexDestiny
					) + atual.realDistance;
				let origin = graph.getVertex(atual.vertexDestiny);
				let destiny = graph.getVertex(edge.vertexDestiny);
				helperEdge = new Edge(
					atual.vertexDestiny,
					edge.vertexDestiny,
					origin,
					destiny,
					realDistance,
					directDistance,
					null
				);
				heap.insert(helperEdge);
			}
		}
	}
	return caminho;
}

metro = new Graph();

for (let indexOrigin = 0; indexOrigin < 14; indexOrigin++) {
	let station = data.estacoes[indexOrigin];
	metro.addVertex(station.nome, station.posX, station.posY);
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
				data.realEdgesColors[directOrigin.station]["E" + indexDestiny];
			metro.addEdge(
				directOrigin.station,
				"E" + indexDestiny,
				realDistance,
				directDistance,
				color
			);
		} else {
			metro.addEdge(
				directOrigin.station,
				"E" + indexDestiny,
				realDistance,
				directDistance,
				null
			);
		}
	}
}

console.log(metro.edgeMap);

// for (const x of metro.edgeMap) {
//     for (const y of x[1]) {
//         console.log(y.vertexOrigin, y.vertexDestiny, y.realDistance, y.directDistance, y.color);
//     }
// }
// console.log(metro.vertexMap);
// addMetroEdges(metro);
// addDirectEdges(metro);
// console.log(metro.realDistance);
