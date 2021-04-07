function setup() {
	createCanvas(800, 800);
	caminho = aStar(metro, 'E11', 'E6');
    console.log(caminho);

    grid = new Map();

	e1Station = new Station("E1", 100, 300);
    grid.set(e1Station.name, e1Station);
	e2Station = new Station("E2", 180, 370);
    grid.set(e2Station.name, e2Station);
	e3Station = new Station("E3", 330, 450);
    grid.set(e3Station.name, e3Station);
	e4Station = new Station("E4", 420, 490);
    grid.set(e4Station.name, e4Station);
	e5Station = new Station("E5", 620, 530);
    grid.set(e5Station.name, e5Station);
	e6Station = new Station("E6", 640, 600);
    grid.set(e6Station.name, e6Station);
	e7Station = new Station("E7", 590, 580);
    grid.set(e7Station.name, e7Station);
	e8Station = new Station("E8", 450, 170);
    grid.set(e8Station.name, e8Station);
	e9Station = new Station("E9", 300, 200);
    grid.set(e9Station.name, e9Station);
	e10Station = new Station("E10", 130, 430);
    grid.set(e10Station.name, e10Station);
	e11Station = new Station("E11", 200, 50);
    grid.set(e11Station.name, e11Station);
	e12Station = new Station("E12", 450, 70);
    grid.set(e12Station.name, e12Station);
	e13Station = new Station("E13", 400, 620);
    grid.set(e13Station.name, e13Station);
	e14Station = new Station("E14", 350, 670);
    grid.set(e14Station.name, e14Station);


	rail1 = new Rail(e1Station, e2Station);
	rail2 = new Rail(e2Station, e10Station);
	rail3 = new Rail(e2Station, e9Station);
	rail4 = new Rail(e2Station, e3Station);
	rail5 = new Rail(e9Station, e11Station);
	rail6 = new Rail(e3Station, e4Station);
	rail7 = new Rail(e3Station, e13Station);
	rail8 = new Rail(e3Station, e9Station);
	rail9 = new Rail(e13Station, e14Station);
	rail10 = new Rail(e4Station, e13Station);
	rail11 = new Rail(e4Station, e8Station);
	rail12 = new Rail(e4Station, e5Station);
	rail13 = new Rail(e8Station, e9Station);
	rail14 = new Rail(e8Station, e12Station);
	rail15 = new Rail(e8Station, e5Station);
	rail16 = new Rail(e5Station, e6Station);
	rail17 = new Rail(e5Station, e7Station);


}

function draw() {
	background(220);

	rail1.draw(1);
	rail2.draw(1);
	rail3.draw(1);
	rail4.draw(1);
	rail5.draw(1);
	rail6.draw(1);
	rail7.draw(1);
	rail8.draw(1);
	rail9.draw(1);
	rail10.draw(1);
	rail11.draw(1);
	rail12.draw(1);
	rail13.draw(1);
	rail14.draw(1);
	rail15.draw(1);
	rail16.draw(1);
	rail17.draw(1);

    for (let index = 0; index < caminho.length-1; index++) {

        tempA = grid.get(caminho[index].destiny);
        tempB = grid.get(caminho[index+1].destiny);
        tempRail = new Rail(tempA, tempB);
        tempRail.draw(3);
    }
    strokeWeight(1);

	e1Station.draw();
	e2Station.draw();
	e3Station.draw();
	e4Station.draw();
	e5Station.draw();
	e6Station.draw();
	e7Station.draw();
	e8Station.draw();
	e9Station.draw();
	e10Station.draw();
	e11Station.draw();
	e12Station.draw();
	e13Station.draw();
	e14Station.draw();

    

	// let randomX = Math.floor(Math.random() * 255);
	// let randomY = Math.floor(Math.random() * 255);
	// let randomZ = Math.floor(Math.random() * 255);
	// station.draw();  rcle(200, 200, 25)

	//   circle(100, 300, 25); //E1
	//   circle(180, 370, 25); //E2
	//   circle(330, 450, 25); //E3
	//   circle(420, 490, 25); //E4
	//   circle(620, 530, 25); //E5
	//   circle(640, 600, 25); //E6
	//   circle(590, 580, 25); //E7
	//   circle(450, 170, 25); //E8
	//   circle(300, 200, 25); //E9
	//   circle(130, 430, 25); //E10
	//   circle(200, 50, 25); //E11
	//   circle(450, 70, 25); //E12
	//   circle(400, 620, 25); //E13
	//   circle(350, 670, 25); //E14

	//line(50,100, 75, 125 6);
	//fill(randomX, randomY, randomZ);
}
