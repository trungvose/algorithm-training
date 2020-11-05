// https://leetcode.com/problems/number-of-islands

export function numIslands (grid: string[][]): number {
  if (!grid.length) {
    return 0
  }

  const rows = grid.length
  const cols = grid[0].length
  let numOfIslands = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        numOfIslands++
        dfs(grid, r, c)
      }
    }
  }

  return numOfIslands

  function dfs (grid: string[][], r: number, c: number) {
    const isNotValidOrOutsideOfGrid =
      r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0'
    if (isNotValidOrOutsideOfGrid) {
      return
    }

    grid[r][c] = '0'
    dfs(grid, r - 1, c)
    dfs(grid, r + 1, c)
    dfs(grid, r, c - 1)
    dfs(grid, r, c + 1)
  }
}
