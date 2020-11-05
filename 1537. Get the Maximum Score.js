/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxSum = function (nums1, nums2) {
  function hasNoCommon (nums1, nums2) {
    return nums1.every((num) => !nums2.includes(num))
  }

  function sum (nums) {
    return nums.reduce((acc, num) => acc + num, 0)
  }

  if (hasNoCommon(nums1, nums2)) {
    const max1 = sum(nums1)
    const max2 = sum(nums2)
    return Math.max(max1, max2)
  }

  let sum1 = 0
  let sum2 = 0
  let retVal = 0
  let i = 0
  let j = 0
  const m = nums1.length
  const n = nums2.length

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sum1 += nums1[i++]
    } else if (nums1[i] > nums2[j]) {
      sum2 += nums2[j++]
    } else {
      retVal += Math.max(sum1, sum2)

      sum1 = 0
      sum2 = 0
      while (i < m && j < n && nums1[i] === nums2[j]) {
        retVal += nums1[i++]
        j++
      }
    }
  }

  while (i < m) {
    sum1 += nums1[i++]
  }

  while (j < n) {
    sum2 += nums2[j++]
  }

  retVal += Math.max(sum1, sum2)

  return retVal
}
