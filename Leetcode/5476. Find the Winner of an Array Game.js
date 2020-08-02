/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k >= arr.length) {
    return Math.max(...arr);
  }
  let tempK = 0;
  let winner = arr[0];
  while (tempK !== k) {
    let first = arr[0];
    let second = arr[1];

    winner = Math.max(first, second);

    if (winner === first) {
      arr.splice(1, 1);
      arr.push(second);
      tempK++;
    } else {
      arr.splice(0, 1);
      arr.push(first);
      tempK = 1;
    }
  }
  return winner;
};

export default getWinner;
