function maxCoins(piles: number[]): number {
  let rounds = piles.length / 3;
  let sum = 0;
  piles.sort((a, b) => a - b);
  for (let i = rounds; i < piles.length; i += 2) {
    sum += piles[i];
  }
  return sum;
}
