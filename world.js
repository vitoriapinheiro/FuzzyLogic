class World {
  constructor(grid) {
    this.grid = grid;
    let { x, y } = this.grid.addFood();
    let { i, j } = this.grid.addAgent();
    this.food = new Food(x, y);
    this.agent = new Agent(i, j, this.grid);
  }

  run() {
    this.grid.drawGrid();
    this.agent.move();

    // let nextPosition = move()// posição do próximo nó no caminho calculado pelo algoritmo de busca
    this.agent.setTargetPosition(
      this.agent.currentPosition.x + 1,
      this.agent.currentPosition.y
    );
  }
}
