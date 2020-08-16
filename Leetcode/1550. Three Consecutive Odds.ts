function threeConsecutiveOdds(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const last = arr[i + 2];
    if (isOdd(current) && isOdd(next) && isOdd(last)) {
      return true;
    }
  }
  return false;
}

function isOdd(num: number) {
  return num % 2 !== 0;
}
