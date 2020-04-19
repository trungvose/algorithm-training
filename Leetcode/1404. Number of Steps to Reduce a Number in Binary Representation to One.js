/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 */
var numSteps = function (s) {
    let num = parseInt(s, 2);
    let step = testNumber(num);
    return step;
}

function testNumber(num) {
    let step = 0
    while (num > 1) {
        if (num % 2 == 0) {
            num = num / 2
        }
        else {
            num = num + 1
        }
        step = step + 1
    }
    return step;
}