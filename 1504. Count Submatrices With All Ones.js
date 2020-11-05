const numSubmat = function (mat) {
  let count = 0
  const m = mat.length
  const n = mat[0].length
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) continue
      if (i > 0 && j > 0) {
        const above = mat[i - 1][j]
        const left = mat[i][j - 1]
        const topLeft = mat[i - 1][j - 1]
        mat[i][j] += Math.min(above, left, topLeft)
      }
      count += mat[i][j]
    }
  }
  return count
}
