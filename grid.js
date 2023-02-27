class Grid{
    constructor(linha,coluna,cellSize){
        this.linha = linha;
        this.coluna = coluna;
        this.cellSize = cellSize;
        this.gridMatrix = [];
        
        for(let i = 0; i < this.coluna; i++){
            
            let col = [];
            for(let j = 0; j < this.linha; j++)col.push("vazio");

            this.gridMatrix.push(col);
        }
    }
    drawGrid(){
        for(let i = 0; i < this.coluna; i++){
            for(let j = 0; j < this.linha;j++){
                switch(this.gridMatrix[i][j]){
                    case "vazio" :
                        fill("255");
                        break;
                    
                    case "grass":
                        fill(0,255,0);
                        break;
                    
                    case "water" :
                        fill(0, 0 ,255);
                        break;
                    
                    case "parede" :
                        fill('#222222')
                        break;
                    
                  case "comida" :
                        fill('#fae');
                        break;
                  
                  case "agente" :
                        fill('#ff0');
                        break;
                }  
                rect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
    
    
            }
        }
    }
    addObstaculos(grassCount, waterCount,paredeCount){
        
        for(let i = 0; i < grassCount; i++){
            let x = int(random(this.coluna));
            let y = int(random(this.linha));
            this.gridMatrix[x][y] = "grass";
        }

        for(let i = 0; i < grassCount; i++){
            let x = int(random(this.coluna));
            let y = int(random(this.linha));
            this.gridMatrix[x][y] = "water";
        }
      

        for(let i = 0; i < paredeCount; i++){
            let x = int(random(this.coluna));
            let y = int(random(this.linha));
            this.gridMatrix[x][y] = "parede";
        }
    }
    addFood(){
        let x = Math.floor(int(random(this.coluna)));
        let y = Math.floor(int(random(this.linha)));
        while(1){
          if(this.gridMatrix[x][y]==="vazio"){
             this.gridMatrix[x][y] = "comida";
            break;
            }
          x = Math.floor(int(random(this.coluna)));
          y = Math.floor(int(random(this.linha)));
        }
      return {x, y};
    }
  addAgent(){
        let x = Math.floor(int(random(this.coluna)));
        let y = Math.floor(int(random(this.linha)));
        while(1){
          if(this.gridMatrix[x][y]==="vazio"){
             this.gridMatrix[x][y] = "agente";
            break;
            }
          x = Math.floor(int(random(this.coluna)));
          y = Math.floor(int(random(this.linha)));
        }
      return {x, y};
  }
}
