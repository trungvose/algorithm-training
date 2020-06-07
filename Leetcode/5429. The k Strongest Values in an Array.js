/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  let sorted = [...arr].sort((a, b) => a - b);
  let median = sorted[Math.floor((sorted.length - 1) / 2)];
  let sortStrongest = sorted
    .map((num) => ({ num, diff: Math.abs(num - median) }))
    .sort((a, b) => {
      let diff = b.diff - a.diff;
      if (b.diff === a.diff) {
        return b.num - a.num;
      }
      return diff;
    });

  return sortStrongest.slice(0, k).map((x) => x.num);
};
export default getStrongest;
