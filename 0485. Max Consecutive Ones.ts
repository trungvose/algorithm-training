function findMaxConsecutiveOnes (nums: number[]): number {
  let max = 0
  let count = 0
  nums.forEach((num) => {
    if (num !== 1) {
      max = Math.max(max, count)
      count = 0
    } else {
      count++
    }
  })
  return Math.max(max, count)
}
