//n = 1 [1]
//n = 2 [1, 3]
//n = 3 [1, 3, 5]
//n = 4 [1, 3, 5, 7]
function minOperations(n: number): number {
  if (n === 0 || n === 1) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < n / 2; i++) {
    count += n - (2 * i + 1);
  }
  return count;
}
