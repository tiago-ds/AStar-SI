class Edge{
    constructor(v, w, r){
        this.destiny = v;
        this.weight = w;
        this.realDistance = r;
    }
}

class Graph{
    constructor(n){
        this.size = n;
        this.list = new Map();
    }

    addVertex(v){
        this.list.set(v, []);
    }

    addEdge(v, w, weight, r){
        if(!this.list.has(v) && !this.list.has(w))
            return; // Não pode adicionar um caminho pra nodes que não existem

        // Criar a referência ao caminho
        var edg1 = new Edge(v, weight, r);
        var edg2 = new Edge(w, weight, r);

        // Os dois comandos pois o grafo é não direcional
        this.list.get(v).push(edg2); // Adicionar A em B 
        this.list.get(w).push(edg1); // E adicionar B em A
    }

    printGraph(){
        console.log(this.list);
    }

}

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

class Node{
    constructor(d, v){
        this.d = d;
        this.v = v;
    }
}

class MinHeap {

    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null];
    }

    getMin () {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1];
    }
    
    insert (node) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node);

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)].v > this.heap[current].v) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]];
                current = Math.floor(current/2);
            }
        }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1];

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1].v > this.heap[2].v) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current].v > this.heap[leftChildIndex].v ||
                        this.heap[current].v > this.heap[rightChildIndex].v)) {
                if (this.heap[leftChildIndex].v < this.heap[rightChildIndex].v) {
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

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }

        return smallest;
    }
}

/*
metro = criarMetro();
metro.printGraph();

 Só uns smokes
var g = new Graph(3);
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B', 3, 8);
g.addEdge('B', 'C', 5, 9);

g.printGraph();
*/
