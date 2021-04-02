class Edge{
    constructor(v, w, r){
        this.destiny = v;
        this.weight = w;
        this.realDistance = r;
    }
}

class Node{
    constructor(d, v){
        this.destiny = d;
        this.funct = v;
    }
}

class Graph{
    constructor(n){
        this.size = n;
        this.list = new Map();
    }

    addVertex(v){
        this.list.set(v, {checked:false, nodes:[]});
    }

    addEdge(v, w, weight, r){
        if(!this.list.has(v) && !this.list.has(w))
            return; // Não pode adicionar um caminho pra nodes que não existem

        // Criar a referência ao caminho
        var edg1 = new Edge(v, weight, r);
        var edg2 = new Edge(w, weight, r);

        // Os dois comandos pois o grafo é não direcional
        this.list.get(v).nodes.push(edg2); // Adicionar A em B 
        this.list.get(w).nodes.push(edg1); // E adicionar B em A
    }

    getVertex(v){
        return this.list.get(v);
    }

    printGraph(){
        console.log(this.list);
    }

}

function addMetroEdges(g){
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

            while (current > 1 && this.heap[Math.floor(current/2)].funct > this.heap[current].funct) {
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
                if (this.heap[1].funct > this.heap[2].funct) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current].weight > this.heap[leftChildIndex].funct ||
                        this.heap[current].weight > this.heap[rightChildIndex].funct)) {
                if (this.heap[leftChildIndex].weight < this.heap[rightChildIndex].funct) {
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


function aStar(g, s, e){
   let heap = new MinHeap();
    n = g.getVertex(s);
    n.checked = true;
    for(const p of n.nodes){
        // Se o destino não estiver na Heap, nem já estiver marcado no grafo, ele coloca esse node na heap
        if(!heap.contains(p.destiny) && g.getVertex(p.destiny).checked!=true){
            // Marca esse como inserido na Heap, e insere
            g.getVertex(p.destiny).checked = true;
            heap.insert(p)
        }
    }
    console.log(heap);
    while(heap.size() >= 1 && heap.heap[1].destiny != e){
        console.log(heap);
        let a = heap.remove();
        n = g.getVertex(a.destiny);
        n.checked = true;
        for(const p of n.nodes){
            // Se o destino não estiver na Heap, nem já estiver marcado no grafo, ele coloca esse node na heap
            if(!heap.contains(p.destiny) && g.getVertex(p.destiny).checked!=true){
                // Marca esse como inserido na Heap, e insere
                g.getVertex(p.destiny).checked = true;
                heap.insert(p)
            }
        }
    }
    console.log(heap);
}

metro = new Graph(14);
for(let x = 1; x <= 14; x++){
    metro.addVertex('E'+ x);
}
addMetroEdges(metro);
//metro.printGraph();

aStar(metro, 'E6', 'E13');
