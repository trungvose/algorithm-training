/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length < 3) {
    return true;
  }
  arr.sort((a, b) => a - b);

  let sum = arr.reduce((acc, num, i) => {
    if (i === arr.length - 1) {
      return acc;
    }
    let diff = arr[i + 1] - num;
    return [...acc, diff]
  }, []);
  
  return new Set(sum).size === 1;
};

export default canMakeArithmeticProgression;