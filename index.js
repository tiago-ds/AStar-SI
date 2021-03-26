{Graph} = require('graph.js');

function addEdges(g){
    g.addEdge('E1','E2',10,10);
    g.addEdge('E2','E3',8.5,8.5);
    g.addEdge('E2','E9',10,10);
    g.addEdge('E2','E10',3.5,3.5);
    g.addEdge('E3','E4',6.3,6.3);
    g.addEdge('E3','E9',9.4,9.4);
    g.addEdge('E3','E13',12.1,18.7);
    g.addEdge('E4','E5',12,13);
    g.addEdge('E4','E8',12.4,15.3);
    g.addEdge('E4','E13',10.6,12.8);
    g.addEdge('E5', 'E6',3,3);
    g.addEdge('E5', 'E7',2.4,2.4);
    g.addEdge('E5', 'E8',19.4,30);
    g.addEdge('E8', 'E9',8.2,9.6);
    g.addEdge('E8', 'E12',6.4,6.4);
    g.addEdge('E9','E11',11.2,12.2);
    g.addEdge('E13','E14',5.1,5.1);
}

function criarMetro(){
    var metro = new Graph(14);
    for(var x = 1; x <= 14; x++){
        metro.addVertex('E' + x);
    }
    addEdges(metro);
    return metro;
}

metro = criarMetro();
metro.printGraph();