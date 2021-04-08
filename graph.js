class Graph{
    constructor(){
        this.realDistance = new Map();
        this.directDistance = new Map();
    }


    // Adiciona um Vértice ao grafo
    addVertex(vertexName){
        this.realDistance.set(vertexName, {checked:false, nodes:[]});
        this.directDistance.set(vertexName, []);
    }

    // Função simples pra marcar o node como visitado
    checkVertex(vertexDestiny){
        this.realDistance.get(vertexDestiny).checked = true;
    }

    // Função simples pra ver se o node já foi visitado
    getCheckVertex(vertexName){
        return this.realDistance.get(vertexName).checked;
    }
    // Função simples que retorna um Array com os nodes que esse node faz fronteira
    getAdjacentNodes(vertexName){
        return this.realDistance.get(vertexName).nodes;
    }

    // Adiciona um caminho de V até W no Map de distâncias reais
    addRealEdge(vertexOrigin, vertexDestiny, weight, f, cor){

        if(!this.realDistance.has(vertexOrigin) && !this.realDistance.has(vertexDestiny))
            return; // Não pode adicionar um caminho pra nodes que não existem

        // Criar a referência ao caminho
        var edg1 = new GraphNode(vertexOrigin, null, weight, null, cor);
        var edg2 = new GraphNode(vertexDestiny, null, weight, null, cor);

        // Os dois comandos pois o grafo é não direcional
        // .nodes porque é um array de objetos, com a propriedade "nodes", além da "checked"
        this.realDistance.get(vertexOrigin).nodes.push(edg2); // Adicionar A em B 
        this.realDistance.get(vertexDestiny).nodes.push(edg1); // E adicionar B em A
    }

    // Adiciona um caminho de V até W no Map de distâncias diretas
    addDirectEdge(vertexOrigin, vertexDestiny, weight){
        if(!this.directDistance.has(vertexOrigin) && !this.directDistance.has(vertexDestiny))
            return;

        var edg1 = new GraphNode(vertexOrigin, weight, null);
        var edg2 = new GraphNode(vertexDestiny, weight, null);

        this.directDistance.get(vertexOrigin).push(edg2);
        this.directDistance.get(vertexDestiny).push(edg1);
    }

    // Função simples que retorna o vértice tanto no Map de distâncias diretas, quanto reais;
    getVertex(vertexName){
        return {real:this.realDistance.get(vertexName), direct:this.directDistance.get(vertexName)};
    }

    // Função que retorna a distância real de V até W
    getRealDistance(vertexOrigin, vertexDestiny){
        if(vertexOrigin == vertexDestiny) return 0;
        else{
            let r = Infinity;
            for(const p of this.getVertex(vertexOrigin).real.nodes){
                if(p.destiny == vertexDestiny){
                    r = p.realDistance;
                }
            }
            return r;
        }
    }

    // Função que retorna a distância direta de V até W
    getDirectDistance(vertexOrigin, vertexDestiny){
        if(vertexOrigin == vertexDestiny) return 0;
        else{
            for(const p of this.getVertex(vertexDestiny).direct){
                if(p.destiny == vertexOrigin)
                    return p.directDistance;
            }
        }
    }

    getColor(vertexOrigin, vertexDestiny){
        return this.realDistance.get(vertexOrigin).nodes.filter((a)=>{
            if(a.destiny === vertexDestiny){
                return a;
        }})[0].cor;
    }
}