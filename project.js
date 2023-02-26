const GRID_SIZE = 30;
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;

function setup() {
    createCanvas(GRID_WIDTH * GRID_SIZE, GRID_HEIGHT * GRID_SIZE);
    let pixelSize = 20;
    let grid = new Grid(GRID_WIDTH, GRID_HEIGHT, GRID_SIZE);
    grid.addObstaculos(200, 50, 200);
    world = new World(grid);
  }
  
  function draw() {
    background(220);
    world.run();
  }