function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  return l.map((left, i) => {
    let right = r[i];
    let subArr = nums.slice(left, right + 1).sort(sortAsc);
    return isArithMetic(subArr);
  });
}

function sortAsc(a: number, b: number) {
  return a - b;
}

function isArithMetic(arr: number[]): boolean {
  return arr.every((val, i) => {
    let prev = arr[i - 1];
    let next = arr[i + 1];
    if (Number.isSafeInteger(prev) && Number.isSafeInteger(next)) {
      return next - val === val - prev;
    }
    return true;
  });
}
