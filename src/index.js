import { Cell } from "./cell";
import { Chess } from "./chessboard";

const SIZE = 8;

let myChessBoard = new Chess(SIZE);
myChessBoard.printBoard();
myChessBoard.printValidCellsData();


let cellA = myChessBoard.board[0][0];
let cellB = myChessBoard.board[5][5];