import { Chess } from "./chessboard";

const SIZE = 8;

let myChessBoard = new Chess(SIZE);
myChessBoard.printBoard();
myChessBoard.validMovesSet();
console.log(myChessBoard.getValidCells());