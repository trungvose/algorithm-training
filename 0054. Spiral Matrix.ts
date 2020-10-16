export function spiralOrder(matrix: number[][]): number[] {
  if (!matrix?.length) {
    return [];
  }

  let L = 0;
  let R = matrix[0].length - 1;
  let T = 0;
  let B = matrix.length - 1;
  let direction = Direction.LeftToRight;
  let out: number[] = [];

  while (T <= B && L <= R) {
    if (direction === Direction.LeftToRight) {
      for (let i = L; i <= R; i++) {
        out.push(matrix[T][i]);
      }
      T++;
      direction = Direction.TopToBottom;
    }

    if (direction === Direction.TopToBottom) {
      for (let i = T; i <= B; i++) {
        out.push(matrix[i][R]);
      }
      R--;
      direction = Direction.RightToLeft;
    }

    if (direction === Direction.RightToLeft) {
      for (let i = R; i >= L; i--) {
        out.push(matrix[B][i]);
      }
      B--;
      direction = Direction.BottomToTop;
    }

    if (direction === Direction.BottomToTop) {
      for (let i = B; i >= T; i--) {
        out.push(matrix[i][L]);
      }
      L++;
      direction = Direction.BottomToTop;
    }
  }

  return out;
}

enum Direction {
  LeftToRight = 0,
  TopToBottom = 1,
  RightToLeft = 2,
  BottomToTop = 3,
}
