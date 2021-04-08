// Referências às estações e aos caminhos;
let station1,station2,station3,station4,station5,station6,station7,station8,station9,station10,station11,station12,station13,station14;
let r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;

// Referência ao grafo;
var metro;

// Referências ao HTML
let inputInicial = window.document.getElementById('start');
let inputFinal = window.document.getElementById('target');
let calculateButton = window.document.getElementById('calculate');
let campoResultado = window.document.getElementById('resultado');
let campoTempo = window.document.getElementById('tempo');

// Variável que vai armazenar o resultado
let caminho;

// Gambiarra pra desenhar o caminho pedido
let flag = false;

// Bindar o onClick à função
calculateButton.onclick = calculateAstar;

function calculateAstar(){
	// Até a linha 30 é gerando o grafo do metrô
	metro = new Graph(14);

	for(let x = 1; x <= 14; x++){
		metro.addVertex('E'+ x);
	}

	addMetroEdges(metro);
	addDirectEdges(metro);

	// Inputs do AStar
	let start = 'E' + inputInicial.value;
	let end = 'E' + inputFinal.value;

	// Chamada do AStar
	caminho = aStar(metro, start, end);
	//console.log(caminho);
	// String para o caminho
	res = 'Caminho percorrido: ';

	// Gerador de String para o Caminho
	for(let x = 0; x < caminho.length - 1; x++){
		res += caminho[x].destiny + ' > ';
	}
	// Último node do caminho
	res+=caminho[caminho.length - 1].destiny;

	// Gambiarra pra desenhar o caminho;
	if (start === 'E6' && end === 'E13') {
		flag = true;
	}else{
		flag = false;
	}
	// Referência ao campo do resultado
	campoResultado.innerHTML = res;
	campoResultado.style.display = "block";

	// Duração em minutos, e a distância percorrida
	let duracao = 0;
	let distanciatotal = 0;

	// Percorre o Array do Caminho, adicionando à distância, o valor da distância real
	for(let x = 0; x < caminho.length; x++){
		// Faz isso só para depois de x = 1, pois não há caminho anterior em x = 0
		if(x > 0){
			// Adiciona o valor à distância total
			distanciatotal += metro.getRealDistance(caminho[x].destiny, caminho[x-1].destiny);
			// Condição para mudança de linha
			if(caminho[x].cor != caminho[x-1].cor){
				// Adiciona 4 minutos à duração
				duracao+=4;
			}
		}
	}
	// Fórmula para converter de km/h a minutos
	let distanciaEmMinutos = (distanciatotal*60)/30;

	// Adiciona à duração os minutos
	duracao+=distanciaEmMinutos;

	// Mostra o tempo no HTML
	campoTempo.innerHTML = `Duração: ${duracao} minutos`;
	campoTempo.style.display = "block";
	
	//console.log(duracao);
}

// Até a linha 132 são funções só pra desenhar as estações
function E1toE2(){
	line(27,228,142,267);
}
function E2toE3(){
	line(142, 267, 238, 306);
}
function E3toE4(){
	line(238, 306, 315, 325);
}
function E4toE5(){
	line(450, 382, 434, 367);
	line(434, 367, 315, 325);
}
function E5toE6(){
	line(450, 382, 469, 411);
}
function E5toE7(){
	line(450, 382, 430, 402);
}
function E5toE8(){
	line(450, 382, 473, 367);
	line(473, 367, 486, 311);
	line(486, 311, 417, 229);
	line(417, 229, 418, 188);
	line(418, 188, 402, 173);
	line(402, 173, 334, 174);
}
function E8toE9(){
	line(334, 174, 255, 175);
	line(255, 175, 238, 190);
}
function E9toE2(){
	line(238, 190, 142, 267);
}
function E9toE3(){
	line(238, 190, 238, 306);
}
function E2toE10(){
	line(142, 267, 114, 296);
}
function E4toE8(){
	line(315, 325, 360, 184);
	line(360, 184, 334, 174);
}
function E3toE13(){
	line(238, 306, 239, 375);
	line(239, 375, 262, 402);
	line(262, 402, 243, 428);
	line(243, 428, 286, 449);
}
function E13toE14(){
	line(286, 449, 267, 507);
}
function E9toE11(){
	line(238, 190, 236, 158);
	line(236, 158, 162, 75);
}
function E8toE12() {
	line(334, 174, 334, 93);
}
function E4toE13() {
	line(315, 325, 300, 375);
	line(300, 375, 309, 380);
	line(309, 380, 286, 449);
}
function drawCaminho(){
	console.log('aa');
	r5.draw(color(0));
	r4.draw(color(0));
	r17.draw(color(0));
}

function setup() {
	createCanvas(582, 582);
	//caminho = aStar(metro, 'E1', 'E13');

	//Inicializar as estações//
	station1 = new Station('E1', 27, 228);
	station2 = new Station('E2', 142, 267);
	station3 = new Station('E3', 238, 306);
	station4 = new Station('E4', 315, 325);
	station5 = new Station('E5', 450, 382);
	station6 = new Station('E6', 469, 411);
	station7 = new Station('E7', 430, 402);
	station8 = new Station('E8', 334, 174);
	station9 = new Station('E9', 238, 190);
	station10 = new Station('E10', 114, 296);
	station11 = new Station('E11', 162, 75);
	station12 = new Station('E12', 334, 93);
	station13 = new Station('E13', 286, 449);
	station14 = new Station('E14', 267, 507); 

	//Inicializar os cmainhos no desenho//
	r1 = new Rail('E1', 'E2', E1toE2);
	r2 = new Rail('E2', 'E3', E2toE3);
	r3 = new Rail('E3', 'E4', E3toE4);
	r4 = new Rail('E4', 'E5', E4toE5);
	r5 = new Rail('E5', 'E6', E5toE6);
	r6 = new Rail('E5', 'E7', E5toE7);
	r7 = new Rail('E5', 'E8', E5toE8);
	r8 = new Rail('E8', 'E9', E8toE9);
	r9 = new Rail('E9', 'E2', E9toE2);
	r10 = new Rail('E2', 'E10', E2toE10);
	r11 = new Rail('E9', 'E3', E9toE3);
	r12 = new Rail('E4', 'E8', E4toE8);
	r13 = new Rail('E3', 'E13', E3toE13);
	r14 = new Rail('E13', 'E14', E13toE14);
	r15 = new Rail('E9', 'E11', E9toE11);
	r16 = new Rail('E8', 'E12', E8toE12);
	r17 = new Rail('E4', 'E13', E4toE13);
}

function drawStations(){
	station1.draw();
	station2.draw();
	station3.draw();
	station4.draw();
	station5.draw();
	station6.draw();
	station7.draw();
	station8.draw();
	station9.draw();
	station10.draw();
	station11.draw();
	station12.draw();
	station13.draw();
	station14.draw();
}

function drawRails(){
	r1.draw(color(10,0,200));
	r2.draw(color(10,0,200));
	r3.draw(color(10,0,200));
	r4.draw(color(10,0,200));
	r5.draw(color(10,0,200));
	r6.draw(color(255,211,25));
	r7.draw(color(255,211,25));
	r8.draw(color(255,211,25));
	r9.draw(color(255,211,25));
	r10.draw(color(255,211,25));
	r11.draw(color(250,10,10));
	r12.draw(color(50,250,50));
	r13.draw(color(250,10,10));
	r14.draw(color(50,250,50));
	r15.draw(color(250,10,10));
	r16.draw(color(50,250,50));
	r17.draw(color(50,250,50));
}

function draw() {
	background(255);
	drawRails();
	if(flag){
		drawCaminho();
	}
	drawStations();
}
