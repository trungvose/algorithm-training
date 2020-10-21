function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (const num of prices) {
    if (num < minPrice) {
      minPrice = num;
    } else if (num - minPrice > maxProfit) {
      maxProfit = num - minPrice;
    }
  }
  return maxProfit;
}
