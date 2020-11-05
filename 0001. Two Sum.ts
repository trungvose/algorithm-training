/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    const index = nums.indexOf(diff)
    if (index !== -1 && index !== i) {
      return [i, index]
    }
  }
  return []
}
