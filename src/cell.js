class Cell{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.children = [];
    }

    setParent(cell){
        this.parent = cell;
    }
}

export { Cell }