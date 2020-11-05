export function findCircleNum (M: number[][]): number {
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (M[i][i] === 1) {
      count++
      dfs(M, i)
    }
  }
  return count

  function dfs (M: number[][], v: number) {
    if (M[v][v] === 0) {
      return
    }
    for (let i = 0; i < M.length; i++) {
      if (M[v][i] === 1) {
        M[v][i] = 0
        dfs(M, i)
      }
    }
  }
}
