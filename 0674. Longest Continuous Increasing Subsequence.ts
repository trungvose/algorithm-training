// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
function findLengthOfLCIS (nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  let length = 1
  let max = 1
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i]
    const next = nums[i + 1]
    if (current < next) {
      length++
    } else {
      max = max < length ? length : max
      length = 1
    }
  }
  return Math.max(max, length)
}
