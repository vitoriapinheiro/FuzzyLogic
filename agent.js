class Agent {
  constructor(x, y, grid) {
    this.currentPosition = createVector(x, y);
    this.targetPosition = createVector(0, 0);
    this.grid = grid;
  }

  setTargetPosition(x, y) {
    this.targetPosition.set(x, y);
  }

  move() {
    if (this.currentPosition.dist(this.targetPosition) > 0.1) {
      this.currentPosition.lerp(this.targetPosition, 0.1);
    }
    let { x, y } = this.currentPosition;
    let pixelSize = this.grid.cellSize;
    fill("#ff0");
    rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
  }

  getAdjacentPositions() {
    const { x, y } = this.position;
    const possiblePositions = [
      { x: x + 1, y: y },
      { x: x - 1, y: y },
      { x: x, y: y + 1 },
      { x: x, y: y - 1 },
    ];

    return possiblePositions.filter((pos) => {
      const gridValue =
        this.grid.gridMatrix[pos.x] && this.grid.gridMatrix[pos.x][pos.y];
      return gridValue && gridValue.weight !== Infinity;
    });
  }

  calculateAgentPosition(agentPos, cellSize) {
    return {
      x: agentPos.i * cellSize + cellSize / 2,
      y: agentPos.j * cellSize + cellSize / 2,
    };
  }

  addVisited(grid) {
    let i = Math.floor(this.pos.x / grid.cellSize);
    let j = Math.floor(this.pos.y / grid.cellSize);
    this.visited.push(createVector(i, j));
    grid.grid[i][j] = "visited";
  }
}
