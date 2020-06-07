/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let retVal = [];
  for (let index = 0; index < n; index++) {
    retVal.push(nums[index]);
    retVal.push(nums[n + index]);
  }
  return retVal;
};
