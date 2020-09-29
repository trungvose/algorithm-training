//N Queens Problem https://leetcode.com/problems/n-queens/

var solveNQueens = function(n) {
  var result = [];
  var positions = [];
  solve(0, positions, result, n);
  return result;
};

function solve(currentRow, positions, result, n) {
  if (n === currentRow) {
    let oneResult = [];
    let str = "";
    for (var p of positions) {
      for (let col = 0; col < n; col++) {
        if (p.col === col) {
          str += "Q";
        } else {
          str += ".";
        }
      }
      oneResult.push(str);
      str = "";
    }
    result.push(oneResult);
  }

  for (let col = 0; col < n; col++) {
    let isSafe = true;

    for (let j = 0; j < currentRow; j++) {
      let isSameCol = positions[j].col === col;
      let isSameDiag =
        positions[j].col - positions[j].row === col - currentRow ||
        positions[j].col + positions[j].row === col + currentRow;
      if (isSameCol || isSameDiag) {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      positions[currentRow] = new Position(currentRow, col);
      solve(currentRow + 1, positions, result, n);
    }
  }
}

class Position {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

solveNQueens(4);