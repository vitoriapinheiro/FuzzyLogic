class World{
  
    constructor(grid){
      this.grid = grid;
      let {x,y} = this.grid.addFood();
      let {i, j} = this.grid.addAgent();
      this.food = new Food(x,y);
      this.agent = new Agent(i, j);
    }
  
    run(){
      this.grid.drawGrid();
      this.agent.move();
    }
  }