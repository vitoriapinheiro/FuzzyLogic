class Grid {
  constructor(linha, coluna, cellSize) {
    this.linha = linha;
    this.coluna = coluna;
    this.cellSize = cellSize;
    this.grid = [];

    for (let i = 0; i < this.coluna; i++) {
      let col = [];
      for (let j = 0; j < this.linha; j++) col.push("vazio");

      this.grid.push(col);
    }
  }

  drawGrid() {
    for (let i = 0; i < this.coluna; i++) {
      for (let j = 0; j < this.linha; j++) {
        switch (this.grid[i][j]) {
          case "vazio":
            fill("255");
            break;

          case "grass":
            fill(0, 255, 0);
            break;

          case "water":
            fill(0, 0, 255);
            break;

          case "parede":
            fill("#222222");
        }
        rect(
          i * this.cellSize,
          j * this.cellSize,
          this.cellSize,
          this.cellSize
        );
      }
    }
  }

  addObstaculos(grassCount, waterCount, paredeCount) {
    for (let i = 0; i < grassCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.grid[x][y] = "grass";
    }

    for (let i = 0; i < waterCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.grid[x][y] = "water";
    }

    for (let i = 0; i < paredeCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.grid[x][y] = "parede";
    }
  }
}
