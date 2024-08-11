const ROW_COUNT = 8;
const COL_COUNT = 8;
const INDEX_START = 0;
const INDEX_END = 7;

const chessBoard = [];
const adjacentCells = [];

function createChessBoard(){
    for(let i=0; i<ROW_COUNT; i++){
        let rowArray = [];
        adjacentCells.push([]);
        for(let j=0; j<COL_COUNT; j++){
            rowArray.push(`(${i}, ${j})`);
            adjacentCells[i].push([]);
        }
        chessBoard.push(rowArray);
    }
}

function printChessBoard(){
    for(let i=0; i<ROW_COUNT; i++){
        let str = "";
        for(let j=0; j<COL_COUNT; j++){
            str += "  " + chessBoard[i][j];
        }
        console.log(str);
    }
}

function createAdjacencyLists(){
    for(let i=0; i<ROW_COUNT; i++){
        for(let j=0; j<COL_COUNT; j++){
            findAllMoves(i, j);
        }
    }
}

function findAllMoves(x, y){
    function leftDown(){
        if(x-1 < INDEX_START || y-2 < INDEX_START){
            return;
        }
        adjacentCells[x][y].push([x-1, y-2]);
    }

    function leftUp(){
        if(x-1 < INDEX_START || y+2 > INDEX_END){
            return;
        }
        adjacentCells[x][y].push([x-1, y+2]);
    }

    function rightDown(){
        if(x+1 > INDEX_END || y-2 < INDEX_START){
            return;
        }
        adjacentCells[x][y].push([x+1, y-2]);
    }

    function rightUp(){
        if(x+1 > INDEX_END || y+2 > INDEX_END){
            return;
        }
        adjacentCells[x][y].push([x+1, y+2]);
    }

    function downLeft(){
        if(x-2 < INDEX_START || y-1 < INDEX_START){
            return;
        }
        adjacentCells[x][y].push([x-2, y-1]);
    }

    function downRight(){
        if(x-2 < INDEX_START || y+1 > INDEX_END){
            return;
        }
        adjacentCells[x][y].push([x-2, y+1]);
    }

    function upLeft(){
        if(x+2 > INDEX_END || y-1 < INDEX_START){
            return;
        }
        adjacentCells[x][y].push([x+2, y-1]);
    }

    function upRight(){
        if(x+2 > INDEX_END || y+1 > INDEX_END){
            return;
        }
        adjacentCells[x][y].push([x+2, y+1]);
    }

    leftDown();
    leftUp();
    rightDown();
    rightUp();
    downLeft();
    downRight();
    upLeft();
    upRight();
}

createChessBoard();
createAdjacencyLists();
printChessBoard();
console.log(adjacentCells);