export function bestTeamScore(scores: number[], ages: number[]): number {
  let players: PlayerAndScore[] = scores.map(
    (score, i) => new PlayerAndScore(ages[i], score)
  );
  players.sort((a, b) => b.age - a.age);
  let max = 0;
  const dp: number[] = [];
  for (let i = 0; i < players.length; i++) {
    let currentScore = players[i].score
    dp[i] = currentScore;
    for (let j = 0; j < i; j++) {
      if (players[j].score >= players[i].score) {
        dp[i] = Math.max(dp[i], dp[j] + currentScore);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}

class PlayerAndScore {
  constructor(public age: number, public score: number) {}
}
