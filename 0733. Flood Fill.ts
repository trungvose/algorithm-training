export function floodFill (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const ROWS = image.length
  const COLS = image[0].length
  const sColor = image[sr][sc]
  if (sColor !== newColor) {
    dfs(sr, sc)
  }
  return image

  function dfs (r: number, c: number) {
    if (!isValid(r, c)) {
      return
    }

    image[r][c] = newColor
    dfs(r - 1, c)
    dfs(r + 1, c)
    dfs(r, c - 1)
    dfs(r, c + 1)
  }

  function isValid (r: number, c: number) {
    return r >= 0 && r < ROWS && c >= 0 && c <= COLS && image[r][c] === sColor
  }
}
