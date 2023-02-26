class Food {
  constructor(grid) {
    // Get the dimensions of the grid
    let numLinhas = grid.linha
    let numColunas = grid.coluna
    let tamanhoCelula = grid.cellSize

    // Remove any existing food
    this.food = null;


    let i = Math.floor(random(numLinhas))
    let j = Math.floor(random(numColunas))

    // Localização em pixels 
    this.x = j * tamanhoCelula + (tamanhoCelula / 2)
    this.y = i * tamanhoCelula + (tamanhoCelula / 2)

    // Create the food vector
    // this.food = createVector(x, y);
    // grid[this.x][this.y] = "food"
  }

  // Display the food
  run() {
    if (this.food) {
      let f = this.food;
      rectMode(CENTER);
      stroke(0);
      fill(127);
      rect(f.x, f.y, 8, 8);
    }
  }

  getFood() {
    return this.food;
  }
}