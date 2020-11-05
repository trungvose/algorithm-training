/**
 Do not return anything, modify nums in-place instead.
 */
function rotate (nums: number[], k: number): void {
  if (!nums.length) {
    return
  }
  const lastKMovingElementsCount = k % nums.length
  if (!lastKMovingElementsCount) {
    return
  }
  const lastKMovingElements = nums.splice(nums.length - lastKMovingElementsCount)
  nums.unshift(...lastKMovingElements)
};
