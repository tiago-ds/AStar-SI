let img;
function preload() {
  img = loadImage('./../image1.png');
}
var caminho;

function setup() {
	createCanvas(800, 800);
    caminho = aStar(metro, 'E7', 'E11');
    console.log(caminho);

    background(0);

    for (const edgeX of metro.edgeMap) {
        for (const edgeY of edgeX[1]) {
            if(edgeY.color != null){
                let r = edgeY.color[0];
                let g = edgeY.color[1];
                let b = edgeY.color[2];
                stroke(r, g, b);
                edgeY.draw(1);
            }
        }
    }

    for (const vertex of metro.vertexMap) {
        fill(255);
        vertex[1].draw()
    }

    setTimeout(()=> { animate(0);}, 1000);
}

function animate(index){
    if(index < caminho.length -1){
        let edgePath = metro.getEdge(caminho[index].name, caminho[index + 1].name)[0];
        console.log(edgePath);
        let r = edgePath.color[0];
        let g = edgePath.color[1];
        let b = edgePath.color[2];
        stroke(r, g, b);
        edgePath.draw(6);
        for (const vertex of metro.vertexMap) {
            fill(255);
            vertex[1].draw()
        }
        index += 1;
        setTimeout(()=> { requestAnimationFrame(animate(index))}, 1000)
    }
}
function draw() {
	
}

function mouseClicked() {
    console.log(mouseX, mouseY);
  }

/*
E1 = 36 315
E2 = 195 370
E3 = 327 420
E4 = 433 466
E5 = 620 526
E6 = 646 566
E7 = 593 533
E8 = 459 235
E9 = 326 260
E10 = 154 408
E11 = 222 103
E12 = 459 127
E13 = 393 619
E14 = 368 698
*/