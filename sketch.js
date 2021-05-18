var path;

var startButton = document.getElementById("startButton");
var start = document.getElementById("start");
var end = document.getElementById("end");
var result = document.getElementById("result");

startButton.addEventListener("click", showTheWay);

function showTheWay() {
	startGraph();
	aStarResult = heuristic(stationsGraph, start.value, end.value);
    path = walkThePath(aStarResult);


    result.innerText = `O tempo da estação ${start.value} até a ${end.value} é ${path[path.length-1].realDistance} minutos`

    background(255);

	for (const edgeX of stationsGraph.edgeMap) {
		for (const edgeY of edgeX[1]) {
			if (edgeY.color != null) {
				let r = edgeY.color[0];
				let g = edgeY.color[1];
				let b = edgeY.color[2];
				stroke(r, g, b);
				edgeY.draw(3);
			}
		}
	}

	for (const vertex of stationsGraph.vertexMap) {
		fill(255);
		vertex[1].draw();
	}


	setTimeout(async () => {
		animate(0);
	}, 1000);
}

var canvas;

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	canvas.position(x, y);
}

function windowResized() {
	centerCanvas();
}

function setup() {
	canvas = createCanvas(800, 800);
	canvas.parent = "main";
	centerCanvas();
	background(255);
    startGraph();
	for (const edgeX of stationsGraph.edgeMap) {
		for (const edgeY of edgeX[1]) {
			if (edgeY.color != null) {
				let r = edgeY.color[0];
				let g = edgeY.color[1];
				let b = edgeY.color[2];
				stroke(r, g, b);
				edgeY.draw(3);
			}
		}
	}

	for (const vertex of stationsGraph.vertexMap) {
		fill(255);
		vertex[1].draw();
	}
}

function animate(index) {
	if (index <= path.length - 1) {
		let edgePath = path[index];
		let r = edgePath.color[0];
		let g = edgePath.color[1];
		let b = edgePath.color[2];
		stroke(r, g, b);
		edgePath.draw(8);
		for (const vertex of stationsGraph.vertexMap) {
			fill(255);
			vertex[1].draw();
		}
		index += 1;
		setTimeout(() => {
			requestAnimationFrame(() => animate(index));
		}, 1000);
	}
}

function draw() {}
