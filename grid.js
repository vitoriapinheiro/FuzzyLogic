class Grid{
    constructor(linha,coluna,cellSize){
        this.linha = linha;
        this.coluna = coluna;
        this.cellSize = cellSize;
        this.grid = [];
        
        for(let i = 0; i < this.coluna; i++){
            
            let col = [];
            for(let j = 0; j < this.linha; j++)col.push("vazio");

            this.grid.push(col);
        }
    }
}

drawGrid(){
    for(let i = 0; i < this.coluna; i++){
        for(let j = 0; j < this.linha;j++){
            switch(this.grid[i][j]){
                case "vazio" :
                    fill(255);
                    break;
                
                case "grass":
                    fill(0,255,0);
                    break;
                
                case "water" :
                    fill(0, 0 ,255);
                    break;
            }  
            rect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);


        }
    }
}