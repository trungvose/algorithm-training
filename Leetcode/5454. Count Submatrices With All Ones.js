var numSubmat = function (mat) {
  let count = 0;
  let m = mat.length;
  let n = mat[0].length;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) continue;
      if (i > 0 && j > 0) {
        let above = mat[i - 1][j];
        let left = mat[i][j - 1];
        let topLeft = mat[i - 1][j - 1];
        mat[i][j] += Math.min(above, left, topLeft);
      }
      count += mat[i][j];
    }
  }
  return count;
};
