/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k >= arr.length) {
    return Math.max(...arr);
  }
  let winnerMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const first = arr[0];
    const second = arr[1];

    let winner = Math.max(first, second);

    if (winner === first) {
      arr.splice(1, 1);
      arr.push(second);
    } else {
      arr.splice(0, 1);
      arr.push(first);
    }

    let winnerCount = winnerMap.get(winner);

    winnerMap.set(winner, winnerCount ? winnerCount + 1 : 1);
    i = 0;
    if (winnerMap.get(winner) == k) {
      return winner;
    }
  }
};

export default getWinner;
