/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 */

const maxProfit = function (prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    const prev = prices[i]
    const next = prices[i + 1]
    if (prev < next) {
      profit += next - prev
    }
  }
  return profit
}
