// Objeto a ser guardado na Heap
class Node{
    constructor(destiny, h, g){
        //String do destino
        this.destiny = destiny;
        
        //Distância direta
        this.h = h;

        //Distância real
        this.g = g;
    }

    getF(){
        return this.h+this.g;
    }
}

class Edge{
    constructor(v, w, x){
        this.destiny = v;
        this.weight = w;
        this.x = x;
    }
}

class Graph{
    constructor(n){
        this.size = n;
        this.realDistance = new Map();
        this.directDistance = new Map();
    }

    addVertex(v){
        this.realDistance.set(v, {checked:false, nodes:[]});
        this.directDistance.set(v, []);
    }

    // Função simples pra marcar o node como visitado
    checkVertex(v){
        this.realDistance.get(v).checked = true;
    }

    // Função simples pra ver se o node já foi visitado
    getCheckVertex(v){
        return this.realDistance.get(v).checked;
    }

    getAdjacentNodes(v){
        // Retorna um Array com os nodes que esse node faz fronteira
        return this.realDistance.get(v).nodes;
    }

    // Adiciona um caminho de V até W no Map de distâncias reais
    addRealEdge(v, w, weight){
        if(!this.realDistance.has(v) && !this.realDistance.has(w))
            return; // Não pode adicionar um caminho pra nodes que não existem

        // Criar a referência ao caminho
        var edg1 = new Edge(v, weight);
        var edg2 = new Edge(w, weight);

        // Os dois comandos pois o grafo é não direcional
        // .nodes porque agora é um array de objetos, com a propriedade "nodes", além da "checked"
        this.realDistance.get(v).nodes.push(edg2); // Adicionar A em B 
        this.realDistance.get(w).nodes.push(edg1); // E adicionar B em A
    }

    // Adiciona um caminho de V até W no Map de distâncias diretas
    addDirectEdge(v, w, weight){
        if(!this.directDistance.has(v) && !this.directDistance.has(w))
            return;

        var edg1 = new Edge(v, weight);
        var edg2 = new Edge(w, weight);

        this.directDistance.get(v).push(edg2);
        this.directDistance.get(w).push(edg1);
    }

    // Função simples que retorna o vértice tanto no Map de distâncias diretas, quanto reais;
    getVertex(v){
        return {real:this.realDistance.get(v), direct:this.directDistance.get(v)};
    }

    // Função que retorna a distância real de V até W
    getRealDistance(v, w){
        if(v == w) return 0;
        else{
            let r = Infinity;
            for(const p of this.getVertex(v).real.nodes){
                if(p.destiny == w){
                    r = p.weight;
                }
            }
            return r;
        }
    }

    // Função que retorna a distância direta de V até W
    getDirectDistance(v, w){
        if(v == w) return 0;
        else{
            for(const p of this.getVertex(w).direct){
                if(p.destiny == v)
                    return p.weight;
            }
        }
    }

    printGraph(){
        console.log(this.directDistance);
    }

}

class MinHeap {
    constructor () {
        this.heap = [null];
    }
    size(){
        return this.heap.length - 1;
    }
    insert(e) {
        this.heap.push(e);

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            while (current > 1 && this.heap[Math.floor(current/2)].getF() > this.heap[current].getF()) {
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]];
                current = Math.floor(current/2);
            }
        }
    }
    remove() {
        let smallest = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1].getF() > this.heap[2].getF()) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current].getF() > this.heap[leftChildIndex].getF() ||
                        this.heap[current].getF() > this.heap[rightChildIndex].getF())) {
                if (this.heap[leftChildIndex].getF() < this.heap[rightChildIndex].getF()) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        }else {
            return null;
        }
        return smallest;
    }
    contains(v){
        for(let x = 1; x < this.heap.length; x++){
            if(this.heap[x].destiny == v)
                return true;
        }
        return false;
    }
}

function addMetroEdges(g){
    g.addRealEdge('E1','E2',10);
    g.addRealEdge('E2','E3',8.5);
    g.addRealEdge('E2','E9',10);
    g.addRealEdge('E2','E10',3.5);
    g.addRealEdge('E3','E4',6.3);
    g.addRealEdge('E3','E9',9.4);
    g.addRealEdge('E3','E13',18.7);
    g.addRealEdge('E4','E5',13);
    g.addRealEdge('E4','E8',15.3);
    g.addRealEdge('E4','E13',12.8);
    g.addRealEdge('E5', 'E6',3);
    g.addRealEdge('E5', 'E7',2.4);
    g.addRealEdge('E5', 'E8',30);
    g.addRealEdge('E8', 'E9',9.6);
    g.addRealEdge('E8', 'E12',6.4);
    g.addRealEdge('E9','E11',12.2);
    g.addRealEdge('E13','E14',5.1);
}

function addDirectEdges(g) {
    g.addDirectEdge('E1','E2',10);
    g.addDirectEdge('E1','E3',18.5);
    g.addDirectEdge('E1','E4',24.8);
    g.addDirectEdge('E1','E5',36.4);
    g.addDirectEdge('E1','E6',38.8);
    g.addDirectEdge('E1','E7',35.8);
    g.addDirectEdge('E1','E8',25.4);
    g.addDirectEdge('E1','E9',17.6);
    g.addDirectEdge('E1','E10',9.1);
    g.addDirectEdge('E1','E11',16.7);
    g.addDirectEdge('E1','E12',27.3);
    g.addDirectEdge('E1','E13',27.6);
    g.addDirectEdge('E1','E14',29.8);
    g.addDirectEdge('E2','E3',8.5);
    g.addDirectEdge('E2','E4',14.8);
    g.addDirectEdge('E2','E5',26.6);
    g.addDirectEdge('E2','E6',29.1);
    g.addDirectEdge('E2','E7',26.1);
    g.addDirectEdge('E2','E8',17.3);
    g.addDirectEdge('E2','E9',10);
    g.addDirectEdge('E2','E10',3.5);
    g.addDirectEdge('E2','E11',15.5);
    g.addDirectEdge('E2','E12',20.9);
    g.addDirectEdge('E2','E13',19.1);
    g.addDirectEdge('E2','E14',21.8);
    g.addDirectEdge('E3','E4',6.3);
    g.addDirectEdge('E3','E5',18.2);
    g.addDirectEdge('E3','E6',20.6);
    g.addDirectEdge('E3','E7',17.6);
    g.addDirectEdge('E3','E8',13.6);
    g.addDirectEdge('E3','E9',9.4);
    g.addDirectEdge('E3','E10',10.3); 
    g.addDirectEdge('E3','E11',19.5);
    g.addDirectEdge('E3','E12',19.1);
    g.addDirectEdge('E3','E13',12.1);
    g.addDirectEdge('E3','E14',16.6);
    g.addDirectEdge('E4','E5',12);
    g.addDirectEdge('E4','E6',14.4);
    g.addDirectEdge('E4','E7',11.5);
    g.addDirectEdge('E4','E8',12.4);
    g.addDirectEdge('E4','E9',12.6);
    g.addDirectEdge('E4','E10',16.7);
    g.addDirectEdge('E4','E11',23.6);
    g.addDirectEdge('E4','E12',18.6);
    g.addDirectEdge('E4','E13',10.6);
    g.addDirectEdge('E4','E14',15.4);
    g.addDirectEdge('E5','E6',3);
    g.addDirectEdge('E5','E7',2.4);
    g.addDirectEdge('E5','E8',19.4);
    g.addDirectEdge('E5','E9',23.3);
    g.addDirectEdge('E5','E10',28.2);
    g.addDirectEdge('E5','E11',34.2);
    g.addDirectEdge('E5','E12',24.8);
    g.addDirectEdge('E5','E13',14.5);
    g.addDirectEdge('E5','E14',17.9);
    g.addDirectEdge('E6','E7',3.3);
    g.addDirectEdge('E6','E8',22.3);
    g.addDirectEdge('E6','E9',25.7);
    g.addDirectEdge('E6','E10',30.3);
    g.addDirectEdge('E6','E11',36.7);
    g.addDirectEdge('E6','E12',27.6);
    g.addDirectEdge('E6','E13',15.2);
    g.addDirectEdge('E6','E14',18.2);
    g.addDirectEdge('E7','E8',20);
    g.addDirectEdge('E7','E9',23);
    g.addDirectEdge('E7','E10',27.3);
    g.addDirectEdge('E7','E11',34.2);
    g.addDirectEdge('E7','E12',25.7);
    g.addDirectEdge('E7','E13',12.4);
    g.addDirectEdge('E7','E14',15.6);
    g.addDirectEdge('E8','E9',8.2);
    g.addDirectEdge('E8','E10',20.3);
    g.addDirectEdge('E8','E11',16.1);
    g.addDirectEdge('E8','E12',6.4);
    g.addDirectEdge('E8','E13',22.7);
    g.addDirectEdge('E8','E14',27.6);
    g.addDirectEdge('E9','E10',13.5);
    g.addDirectEdge('E9','E11',11.2);
    g.addDirectEdge('E9','E12',10.9);
    g.addDirectEdge('E9','E13',21.2);
    g.addDirectEdge('E9','E14',26.6);
    g.addDirectEdge('E10','E11',17.6);
    g.addDirectEdge('E10','E12',24.2);
    g.addDirectEdge('E10','E13',18.7);
    g.addDirectEdge('E10','E14',21.2);
    g.addDirectEdge('E11','E12',14.2);
    g.addDirectEdge('E11','E13',31.5);
    g.addDirectEdge('E11','E14',35.5);
    g.addDirectEdge('E12','E13',28.8);
    g.addDirectEdge('E12','E14',33.6);
    g.addDirectEdge('E13','E14',5.1);
}

function aStar(g, s, e){
    let heap = new MinHeap();

    // Check o começo
    g.checkVertex(s);

    // Nodes que eu posso chegar a partir do começo.
    let fronteiras = g.getAdjacentNodes(s);
    console.log(fronteiras);

    for(const p of fronteiras){
        // Se o destino não estiver na Heap, nem já estiver marcado no grafo, ele coloca esse node na heap
        if(!g.getCheckVertex(p.destiny)){
            // Marca esse como inserido na Heap
            g.checkVertex(p.destiny);
            heap.insert(new Node(p.destiny, g.getDirectDistance(s, p.destiny), g.getRealDistance(s, p.destiny))); 
            //console.log(heap);
        }
    }
     // Enquanto o tamanho da Heap for maior do que 0, ou TALVEZ (não sei) não chegou no destino
    let a = 0;
    while(heap.size() >= 1 && heap.heap[1].destiny != e && a != 5){
        // atual vai ser um NODE tirado da Heap (preciso ver essa porra de Node != Edge)
        let atual = heap.remove();
        a++;
        console.log('indo para ' + atual.destiny);

        g.checkVertex(atual.destiny);

        fronteiras = g.getAdjacentNodes(atual.destiny);

        for(const p of fronteiras){
            // Se o destino não estiver na Heap, nem já estiver marcado no grafo, ele coloca esse node na heap
            if(/*!heap.contains(p.destiny) && */!g.getCheckVertex(p.destiny)){
                // Marca esse como inserido na Heap, e insere
                g.checkVertex(p.destiny);
                // Talvez isso ^ não esteja correto

                // Nesse novo NODE eu vou colocar a distância direta desse P pra o FIM, E
                // O valor salvo em atual, mais a distância de atual pra o que eu tô vendo agora
                //console.log(`De ${atual.destiny} pra ${p.destiny}: ${g.getRealDistance(atual.destiny, p.destiny)}`);
                heap.insert(new Node(p.destiny, g.getDirectDistance(p.destiny,e), g.getRealDistance(atual.destiny,p.destiny) + atual.h));
                
                // Tem algo errado com a função heurística. Quando eu saio de E7 eu vou pra E4. Tudo certo.
                // Mas aí, E3 fica com o valor maior que E13, o que não era pra acontecer

            }
        }
        console.log(heap);
    }
     //console.log(heap);
 }

metro = new Graph(14);
for(let x = 1; x <= 14; x++){
    metro.addVertex('E'+ x);
}
addMetroEdges(metro);
addDirectEdges(metro);

//aStar(metro, 'E12', 'E6');
aStar(metro, 'E6', 'E13');

//metro.printGraph();