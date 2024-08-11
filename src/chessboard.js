import { Cell } from "./cell";

class Chess {
  constructor(size) {
    this.size = size;
    this.index_start = 0;
    this.index_end = this.size - 1;
    this.board = [];
    this.validCells = {};
    for (let i = 0; i < this.size; i++) {
      this.board.push([]);
      for (let j = 0; j < this.size; j++) {
        this.board[i].push(new Cell(i, j));
      }
    }
  }

  printBoard() {
    for (let i = 0; i < this.size; i++) {
      let str = "";
      for (let j = 0; j < this.size; j++) {
        str += "  " + this.board[i][j].coordinates;
      }
      console.log(str);
    }
  }

  validMovesSet() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.findAllMoves(i, j);
      }
    }
  }

  findAllMoves(x, y) {
    // create an object with
    // key = (x, y) coordinates and
    // value equals an array of coordinates of all possible moves
    if (!this.validCells[`(${x}, ${y})`]) {
      this.validCells[`(${x}, ${y})`] = [];
    }
    //The following 'if' conditions ensure the moves don't go off the board.
    // LEFT-DOWN
    if (x - 1 >= this.index_start && y - 2 >= this.index_start) {
      this.validCells[`(${x}, ${y})`].push([x - 1, y - 2]);
    }

    // LEFT-UP
    if (x - 1 >= this.index_start && y + 2 <= this.index_end) {
      // return;
      this.validCells[`(${x}, ${y})`].push([x - 1, y + 2]);
    }

    // RIGHT-DOWN
    if (x + 1 <= this.index_end && y - 2 >= this.index_start) {
      this.validCells[`(${x}, ${y})`].push([x + 1, y - 2]);
    }

    // RIGHT-UP
    if (x + 1 <= this.index_end && y + 2 <= this.index_end) {
      this.validCells[`(${x}, ${y})`].push([x + 1, y + 2]);
    }

    // DOWN-LEFT
    if (x - 2 >= this.index_start && y - 1 >= this.index_start) {
      this.validCells[`(${x}, ${y})`].push([x - 2, y - 1]);
    }

    // DOWN-RIGHT
    if (x - 2 >= this.index_start && y + 1 <= this.index_end) {
      this.validCells[`(${x}, ${y})`].push([x - 2, y + 1]);
    }

    // UP-LEFT
    if (x + 2 <= this.index_end && y - 1 >= this.index_start) {
      this.validCells[`(${x}, ${y})`].push([x + 2, y - 1]);
    }

    // UP-RIGHT
    if (x + 2 <= this.index_end && y + 1 <= this.index_end) {
      this.validCells[`(${x}, ${y})`].push([x + 2, y + 1]);
    }
  }

  getValidCells() {
    return this.validCells;
  }
}

export { Chess };
