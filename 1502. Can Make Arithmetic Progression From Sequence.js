/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
  if (arr.length < 3) {
    return true
  }
  arr.sort((a, b) => a - b)

  const sum = arr.reduce((acc, num, i) => {
    if (i === arr.length - 1) {
      return acc
    }
    const diff = arr[i + 1] - num
    return [...acc, diff]
  }, [])

  return new Set(sum).size === 1
}

export default canMakeArithmeticProgression
