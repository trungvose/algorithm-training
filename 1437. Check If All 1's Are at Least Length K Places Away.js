/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  const idxArr = nums.reduce((arr, num, i) => {
    if (num === 1) {
      arr.push(i)
    }
    return arr
  }, [])

  for (let index = 0; index < idxArr.length - 1; index++) {
    const diff = idxArr[index + 1] - idxArr[index] - 1
    if (diff < k) {
      return false
    }
  }
  return true
}
