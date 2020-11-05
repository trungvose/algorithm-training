// https://leetcode.com/problems/number-of-closed-islands

function closedIsland (grid: number[][]): number {
  const ROWS = grid.length
  const COLS = grid[0].length
  let numberOfClosedIslands = 0

  for (let i = 1; i < ROWS - 1; i++) {
    for (let j = 0; j < COLS - 1; j++) {
      if (grid[i][j] === 0 && dfs(grid, i, j)) {
        numberOfClosedIslands++
      }
    }
  }

  return numberOfClosedIslands

  function dfs (grid: number[][], i: number, j: number): boolean {
    // -1 : visited
    //  1 : water
    //  0 : land

    if (grid[i][j] === -1 || grid[i][j] === 1) {
      return true
    }

    if (isOnTheEdge(i, j)) {
      return false
    }

    grid[i][j] = -1

    const up = dfs(grid, i - 1, j)
    const down = dfs(grid, i + 1, j)
    const left = dfs(grid, i, j - 1)
    const right = dfs(grid, i, j + 1)
    return up && down && left && right
  }

  function isOnTheEdge (i: number, j: number): boolean {
    return i === 0 || j === 0 || i === ROWS - 1 || j === COLS - 1
  }
}
