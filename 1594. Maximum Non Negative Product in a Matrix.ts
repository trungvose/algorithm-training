export function maxProductPath (grid: number[][]): number {
  if (!grid.length) {
    return 0
  }
  const mod = 10 ** 9 + 7

  let max = -1
  const ROWS = grid.length
  const COLS = grid[0].length

  dfs(grid, 0, 0, grid[0][0])
  return max % mod

  function dfs (grid: number[][], r: number, c: number, product: number) {
    if (r === ROWS - 1 && c === COLS - 1) {
      max = Math.max(max, product)
      return
    }

    if (grid[r][c] === 0) {
      max = Math.max(max, 0)
      return
    }

    if (r + 1 < ROWS) {
      dfs(grid, r + 1, c, product * grid[r + 1][c])
    }
    if (c + 1 < COLS) {
      dfs(grid, r, c + 1, product * grid[r][c + 1])
    }
  }
}
