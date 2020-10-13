/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowSet = new Set<number>();
  const colSet = new Set<number>();
  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    });
  });

  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    });
  });
}
