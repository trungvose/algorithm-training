export function maxProductPath(grid: number[][]): number {
  if (!grid.length) {
    return 0;
  }

  let max = -1;
  let ROWS = grid.length;
  let COLS = grid[0].length;

  dfs(grid, 0, 0, 1);
  return max;

  function dfs(grid: number[][], r: number, c: number, product: number) {
    if (r === ROWS - 1 && c === COLS - 1) {
      if (product >= 0 && product > max) {
        max = product;
      } else {
        max = -1;
      }
    }

    let isOutside = r < 0 || c < 0 || r >= ROWS || c >= COLS;
    if (isOutside) {
      return;
    }
    product *= grid[r][c];
    dfs(grid, r - 1, c, product);
    dfs(grid, r + 1, c, product);
    dfs(grid, r, c - 1, product);
    dfs(grid, r, c + 1, product);
  }
}
