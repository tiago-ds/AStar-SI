// Função pra evitar poluição de código. Vai criar o grafo das
// distâncias reais.
function addMetroEdges(g){
    g.addRealEdge('E1','E2',10, null,'azul');
    g.addRealEdge('E2','E3',8.5, null,'azul');
    g.addRealEdge('E2','E9',10, null, 'amarelo');
    g.addRealEdge('E2','E10',3.5, null, 'amarelo');
    g.addRealEdge('E3','E4',6.3, null, 'azul');
    g.addRealEdge('E3','E9',9.4, null, 'vermelho');
    g.addRealEdge('E3','E13',18.7, null, 'vermelho');
    g.addRealEdge('E4','E5',13, null, 'azul');
    g.addRealEdge('E4','E8',15.3, null, 'verde');
    g.addRealEdge('E4','E13',12.8, null, 'verde');
    g.addRealEdge('E5', 'E6',3, null, 'azul');
    g.addRealEdge('E5', 'E7',2.4, null, 'amarelo');
    g.addRealEdge('E5', 'E8',30, null, 'amarelo');
    g.addRealEdge('E8', 'E9',9.6, null, 'amarelo');
    g.addRealEdge('E8', 'E12',6.4,null,'verde');
    g.addRealEdge('E9','E11',12.2,null,'vermelho');
    g.addRealEdge('E13','E14',5.1,null,'vermelho');
}

// Função pra evitar poluição de código. Vai criar o grafo das
// distâncias diretas.
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

// Criar a referência da heap
let heap;

// A função AStar. G é o grafo, S é o vértice inicial, e E é o vértice final;
function aStar(g, s, e){

    // Uma condição básica para caso o Node inicial seja o mesmo que o final.
    // Nesse caso, ele vai retornar um array de tamanho 1, com o node inicial.
    if(s == e){
        return [new GraphNode(s, 0, 0, 1)];
    }

    // Construir a heap
    heap = new MinHeap();

    // Check o começo
    g.checkVertex(s);

    // Nodes que eu posso chegar a partir do começo.
    let fronteiras = g.getAdjacentNodes(s);
    
    // Aqui é checado cada node no qual o início faz fronteira, e coloca eles na heap;
    for(const p of fronteiras){
        // Se o destino não estiver na Heap (como é a primeira iteração, não vai estar)
        // Marca esse como inserido na Heap
        g.checkVertex(p.destiny);
        heap.insert(new GraphNode(p.destiny, g.getDirectDistance(p.destiny, e), g.getRealDistance(s, p.destiny), 1, p.cor));
    }

    // Um contador do "nível" da árvore investigado agora
    let fronteiraCounter;
    
    // Gambiarra pra fazer o Javascript funcionar;
    // Basicamente, pra ter uma condição válida pra entrar no while;
    let atual = { destiny:null };

    // Aqui é iniciado o array do Caminho final. 
    let caminho = [new GraphNode(s, g.getDirectDistance(s, e), g.getRealDistance(s, e), 1, null)];
    // Enquanto o tamanho da Heap for maior do que 0, ou não chegou no destino
    while(heap.size() >= 1 && (atual.destiny == null || atual.destiny != e)){
        // Transforma o node atual no primeiro elemento da heap, e remove ele de lá;
        atual = heap.remove();
        // Nesse caso, é usado o valor de fronteira, que é como se fosse o "nível" da árvore,
        // pra salvar o caminho. O splice vai tirar os elementos extras, só deixando o atual, caso
        // ele seja o certo.
        caminho.splice(atual.fronteira);
        caminho.push(atual);

        console.log('indo para ' + atual.destiny);

        // Ele aumenta um "nível" do valor citado na linha 163;
        fronteiraCounter = atual.fronteira + 1;

        // Marca o vértice atual;
        g.checkVertex(atual.destiny);

        // Pegam os nodes que fazem fronteira com o atual (por isso o nome);
        fronteiras = g.getAdjacentNodes(atual.destiny);
        
        // Para cada vértice com o qual ele faz fronteira, ele vai checar a inserção na heap;
        for(const p of fronteiras){
            // Se o destino não estiver na Heap, nem já estiver marcado no grafo, ele coloca esse node na heap;
            if(!g.getCheckVertex(p.destiny)){
                // Marca esse como inserido na Heap, e o insere;
                g.checkVertex(p.destiny);

                // Nesse new Node, é colocado a distância direta desse P pra o FIM, e
                // o valor salvo na variável "atual", mais a distância de "atual" pra o que eu está sendo checado agora;
                //console.log(p.cor)
                heap.insert(new GraphNode(p.destiny, g.getDirectDistance(p.destiny,e), g.getRealDistance(atual.destiny,p.destiny) + atual.realDistance, fronteiraCounter, p.cor));
            }
        }
    }
    caminho[0].cor = g.getColor(caminho[0].destiny,caminho[1].destiny);
    // Por fim, retorna o array do caminho final.
    return caminho;
 }



// aStar(metro, 'E1', 'E12');
// console.log(metro.realDistance);