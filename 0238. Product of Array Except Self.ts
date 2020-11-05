function productExceptSelf (nums: number[]): number[] {
  return nums.map((num, idx) => nums.reduce((product, n, i) => {
    if (i === idx) {
      return product
    }
    return product * n
  }, 1))
}
