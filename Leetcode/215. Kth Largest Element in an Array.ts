
//time: O(Nlog(N)). space O(1)
function findKthLargest(nums: number[], k: number): number {
  if (nums.length < k) {
    throw new Error("Out of range");
  }
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
 