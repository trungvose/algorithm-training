function dominantIndex (nums: number[]): number {
  let maxIndex = 0
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num > max) {
      max = num
      maxIndex = i
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    if (maxIndex !== i && max < 2 * nums[i]) return -1
  }

  return maxIndex
}
