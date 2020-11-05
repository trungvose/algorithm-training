/**
 Do not return anything, modify board in-place instead.
 https://leetcode.com/problems/surrounded-regions/
 */
export function solve (board: string[][]): void {
  if (!board || !board.length) {
    return
  }
  const ROWS = board.length
  const COLS = board[0].length
  const borders = generateBorders()
  borders.forEach(({ row, col }) => {
    dfs(board, row, col)
  })

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X'
      } else if (board[r][c] === 'E') {
        board[r][c] = 'O'
      }
    }
  }

  function dfs (board: string[][], row: number, col: number) {
    if (board[row][col] !== 'O') {
      return
    }

    board[row][col] = 'E'
    if (col < COLS - 1) {
      dfs(board, row, col + 1)
    }
    if (row < ROWS - 1) {
      dfs(board, row + 1, col)
    }
    if (col > 0) {
      dfs(board, row, col - 1)
    }
    if (row > 0) {
      dfs(board, row - 1, col)
    }
  }

  function generateBorders (): Set<Pair> {
    const borders = new Set<Pair>()
    for (let r = 0; r < ROWS; r++) {
      borders.add(new Pair(r, 0))
      borders.add(new Pair(r, COLS - 1))
    }

    for (let c = 0; c < COLS; c++) {
      borders.add(new Pair(0, c))
      borders.add(new Pair(ROWS - 1, c))
    }
    return borders
  }
}

class Pair {
  // eslint-disable-next-line
  constructor (public row: number, public col: number) {}
}
