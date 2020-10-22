export function maxSubArrayLen(nums: number[], k: number): number {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}
