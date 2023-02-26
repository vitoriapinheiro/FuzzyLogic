function setup() {
  createCanvas(800, 800);
  let pixelSize = 20;
  let grid = new Grid(30, 30, 40);
  grid.addObstaculos(200, 50, 200);
  world = new World(grid);
}

function draw() {
  background(220);
  world.run();
}