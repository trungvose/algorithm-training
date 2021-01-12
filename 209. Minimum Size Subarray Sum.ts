function minSubArrayLen (s: number, nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  let output = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= s) {
        output = Math.min(output, j - i + 1)
        break
      }
    }
  }
  return output === Number.MAX_SAFE_INTEGER ? 0 : output
}
