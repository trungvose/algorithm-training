/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    const first = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      const second = arr[j];
      if (Math.abs(first - second) > a) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        const third = arr[k];
        let isValid =
          Math.abs(first - second) <= a &&
          Math.abs(second - third) <= b &&
          Math.abs(first - third) <= c;
        if (isValid) {
          count++;
        }
      }
    }
  }
  return count;
};
