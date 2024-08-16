import { Cell } from "./cell";

class Chess {
  constructor(size) {
    this.size = size;
    this.index_start = 0;
    this.index_end = this.size - 1;
    this.board = [];
    this.validCells = {};

    this.instantiateCellsOnBoard();
  }

  instantiateCellsOnBoard() {
    // create cells with empty children array
    for (let i = 0; i < this.size; i++) {
      this.board.push([]);
      for (let j = 0; j < this.size; j++) {
        let cell = new Cell(i, j);
        this.board[i].push(cell);
      }
    }

    // fill children array of each cell with valid cells
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.populateWithValidMoves(this.board[i][j]);
      }
    }
  }

  printBoard() {
    for (let i = 0; i < this.size; i++) {
      let str = "";
      for (let j = 0; j < this.size; j++) {
        str += `   (${this.board[i][j].x}, ${this.board[i][j].y})`;
      }
      console.log(str);
    }
  }

  populateWithValidMoves(cell) {
    //The following 'if' conditions filters out the moves that go off the board,
    //and only stores valid moves in each cell's children array.
    // LEFT-DOWN
    if (cell.x - 1 >= this.index_start && cell.y - 2 >= this.index_start) {
      cell.children.push(this.board[cell.x - 1][cell.y - 2]);
    }

    // LEFT-UP
    if (cell.x - 1 >= this.index_start && cell.y + 2 <= this.index_end) {
      // return;
      cell.children.push(this.board[cell.x - 1][cell.y + 2]);
    }

    // RIGHT-DOWN
    if (cell.x + 1 <= this.index_end && cell.y - 2 >= this.index_start) {
      cell.children.push(this.board[cell.x + 1][cell.y - 2]);
    }

    // RIGHT-UP
    if (cell.x + 1 <= this.index_end && cell.y + 2 <= this.index_end) {
      cell.children.push(this.board[cell.x + 1][cell.y + 2]);
    }

    // DOWN-LEFT
    if (cell.x - 2 >= this.index_start && cell.y - 1 >= this.index_start) {
      cell.children.push(this.board[cell.x - 2][cell.y - 1]);
    }

    // DOWN-RIGHT
    if (cell.x - 2 >= this.index_start && cell.y + 1 <= this.index_end) {
      cell.children.push(this.board[cell.x - 2][cell.y + 1]);
    }

    // UP-LEFT
    if (cell.x + 2 <= this.index_end && cell.y - 1 >= this.index_start) {
      cell.children.push(this.board[cell.x + 2][cell.y - 1]);
    }

    // UP-RIGHT
    if (cell.x + 2 <= this.index_end && cell.y + 1 <= this.index_end) {
      cell.children.push(this.board[cell.x + 2][cell.y + 1]);
    }
  }

  printValidCellsData() {
    let validCells = {};
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (!validCells[`(${i}, ${j})`]) {
          validCells[`(${i}, ${j})`] = [];
        }
        validCells[`(${i}, ${j})`] = this.board[i][j].children;
      }
    }
    console.log(validCells);
  }

  BFSTraversal(cellA, cellB) {}
}

export { Chess };
