class World {
  constructor(grid) {
    this.grid = grid;
    let { foodX, foodY } = this.grid.addFood();
    let { agentX, agentY } = this.grid.addAgent();
    this.food = new Food(foodX, foodY);
    this.agent = new Agent(agentX, agentY, this.grid);
  }

  run() {
    this.grid.drawGrid();

    this.agent.setTargetPosition(
      this.agent.currentPosition.x + 1,
      this.agent.currentPosition.y
    );

    this.agent.move();
  }
}
