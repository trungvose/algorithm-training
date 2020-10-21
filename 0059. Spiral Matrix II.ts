export function generateMatrix(n: number): number[][] {
  if (!n) {
    return [];
  }
  const output: number[][] = [];
  let counter = 1;
  let T = 0,
    B = n - 1,
    L = 0,
    R = n - 1;
  while (T <= B && L <= R) {
    for (let i = L; i <= R; i++) {
      output[T] = output[T] || [];
      output[T][i] = counter;
      counter++;
    }
    for (let i = T + 1; i <= B; i++) {
      output[i] = output[i] || [];
      output[i][R] = counter;
      counter++;
    }
    if (T < B && L < R) {
      for (let i = R - 1; i > L; i--) {
        output[B] = output[B] || [];
        output[B][i] = counter;
        counter++;
      }
      for (let i = B; i > T; i--) {
        output[i] = output[i] || [];
        output[i][L] = counter;
        counter++;
      }
    }
    T++;
    B--;
    L++;
    R--;
  }
  return output;
}
