export function spiralOrder (matrix: number[][]): number[] {
  if (!matrix?.length) {
    return []
  }

  let L = 0
  let R = matrix[0].length - 1
  let T = 0
  let B = matrix.length - 1
  const out: number[] = []

  while (T <= B && L <= R) {
    for (let i = L; i <= R; i++) {
      out.push(matrix[T][i])
    }
    for (let i = T + 1; i <= B; i++) {
      out.push(matrix[i][R])
    }
    if (T < B && L < R) {
      for (let i = R - 1; i > L; i--) {
        out.push(matrix[B][i])
      }
      for (let i = B; i > T; i--) {
        out.push(matrix[i][L])
      }
    }
    T++
    B--
    L++
    R--
  }

  return out
}
