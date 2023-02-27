class Food {
  constructor(linha, coluna) {
    // Get the dimensions of the grid
    this.linha = linha;
    this.coluna = coluna;

  }

  // Display the food
  run() {
    
  }

  getFood() {
    return {linha: this.linha,coluna: this.coluna};
  }
}