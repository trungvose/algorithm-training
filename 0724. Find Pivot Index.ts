function pivotIndex (nums: number[]): number {
  if (nums.length < 3) {
    return -1
  }

  for (let i = 0; i < nums.length; i++) {
    if (sum(nums.slice(0, i)) === sum(nums.slice(i + 1, nums.length))) {
      return i
    }
  }
  return -1
}

function sum (arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0)
}
