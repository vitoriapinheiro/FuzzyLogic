class Food {
  constructor(grid) {
    // Get the dimensions of the grid
    this.linha = grid.linha;
    this.coluna = grid.coluna;
    this.cellSize = grid.cellSize;
    this.grid = grid;

    this.i = Math.floor(random(this.linha));
    this.j = Math.floor(random(this.coluna));

  }

  // Display the food
  run() {
    while(this.grid.grid[this.i][this.j] === "parede"){
      this.i = Math.floor(random(this.linha));
      this.j = Math.floor(random(this.coluna));
    }
      fill('#fae');
      rect(this.i * this.cellSize, this.j * this.cellSize, this.cellSize, this.cellSize);
  }

  getFood() {
    return this.food;
  }
}