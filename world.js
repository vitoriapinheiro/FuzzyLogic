class World {
  constructor(grid) {
    this.food = new Food(grid);
    this.grid = grid;
  }

  run() {
    this.grid.drawGrid();
    this.food.run();
  }
}
