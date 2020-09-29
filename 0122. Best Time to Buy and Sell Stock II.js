/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 */

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        let prev = prices[i];
        let next = prices[i + 1];
        if (prev < next) {
            profit += next - prev;
        }
    }
    return profit;
}
