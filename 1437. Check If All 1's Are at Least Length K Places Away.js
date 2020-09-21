/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let idxArr = nums.reduce((arr, num, i) => {
        if (num === 1) {
            arr.push(i);
        }
        return arr;
    }, []);
    
    for (let index = 0; index < idxArr.length - 1; index++) {
        let diff = idxArr[index + 1] - idxArr[index] - 1;
        if (diff < k) {
            return false;            
        }
    }
    return true
};