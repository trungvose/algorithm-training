function exist (board: string[][], word: string): boolean {
  const ROWS = board.length
  const COLS = board[0].length

  const backtrack = (row: number, col: number, word: string, index: number): boolean => {
    if (index >= word.length) {
      return true
    }
    if (row < 0 || row === ROWS || col < 0 || col === COLS || word.charAt(index) !== board[row][col]) {
      return false
    }
    let retVal = false
    board[row][col] = '#'
    const rowOffsets = [1, 0, -1, 0]
    const colOffsets = [0, 1, 0, -1]
    for (let i = 0; i < 4; i++) {
      retVal = backtrack(row + rowOffsets[i], col + colOffsets[i], word, index + 1)
      if (retVal) {
        break
      }
    }
    board[row][col] = word.charAt(index)
    return retVal
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (backtrack(row, col, word, 0)) {
        return true
      }
    }
  }
  return false
};
