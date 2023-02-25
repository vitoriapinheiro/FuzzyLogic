class World(){
  
  constructor(){
    let num = 5;
    this.food = new Food(num);
    this.turtle = new Turtle();
    
    let water = new Water(); // Faster
    let grass = new Grass(); // Medium
    let sand = new Sand(); // Slower
  }

  run(){
    this.food.run();
    if (cond_1){
      this.bfs();
    } else if (cond_2){
      this.dfs()
    } else if (cond_3){
      this.uni();
    } else if (cond_4){
      this.greedy();
    } else if (cond_5){
      this.as;
    }
    
  }
  function newGrass(){
  let x = random()
  let y = random();
  rect(x,y,20,20);
    fill(51)
  rect(x+20,y,20,20);
    fill('rgba(0,255,0, 0.25)')
}
}


function setup() {
    createCanvas(800, 800);
    let pixelSize = 20;
    world = new World();
  }
  
  function draw() {
    background(220);
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
      rect(x, y, pixelSize, pixelSize);
    }
    function newGrass(){
  let x = 0
  let y = 0;
  rect(random(x),random(y),20,20);
    fill(51)
}
  }
    world.run();
  }