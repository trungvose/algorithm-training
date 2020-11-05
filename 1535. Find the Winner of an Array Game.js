/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = function (arr, k) {
  const arrMax = Math.max(...arr)
  if (k >= arr.length) {
    return arrMax
  }
  let tempK = 0
  let winner = arr.shift()
  while (tempK < k) {
    if (winner === arrMax) {
      return arrMax
    }

    const second = arr.shift()

    if (winner > second) {
      arr.push(second)
      tempK++
    } else {
      arr.push(winner)
      winner = second
      tempK = 1
    }
  }
  return winner
}

export default getWinner
