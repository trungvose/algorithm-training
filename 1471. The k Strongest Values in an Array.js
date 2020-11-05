/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = function (arr, k) {
  const sorted = [...arr].sort((a, b) => a - b)
  const median = sorted[Math.floor((sorted.length - 1) / 2)]
  const sortStrongest = sorted
    .map((num) => ({ num, diff: Math.abs(num - median) }))
    .sort((a, b) => {
      const diff = b.diff - a.diff
      if (b.diff === a.diff) {
        return b.num - a.num
      }
      return diff
    })

  return sortStrongest.slice(0, k).map((x) => x.num)
}
export default getStrongest
