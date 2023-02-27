class World{
  
    constructor(grid){
      this.grid = grid;
      let {x,y} = this.grid.addFood();
      let {i, j} = this.grid.addAgent();
      this.food = new Food(x,y);
    }
  
    run(){
      this.grid.drawGrid();
    }
  }