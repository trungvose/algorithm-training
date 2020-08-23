function maxCoins(piles: number[]): number {
  let rounds = piles.length / 3;
  piles.sort((a, b) => a - b);
  let nRoundsSecondLargest = piles.slice(rounds + 1, rounds * 2);
  return nRoundsSecondLargest.reduce((sum, num) => sum + num, 0);
}