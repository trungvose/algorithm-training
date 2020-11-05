function mostVisited (n: number, rounds: number[]): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < rounds.length - 1; i++) {
    const current = rounds[i]
    const next = rounds[i + 1]
    if (current <= next) {
      for (let j = current; j < next; j++) {
        updateRound(j)
      }
    } else {
      for (let k = current; k < n; k++) {
        updateRound(k)
      }
      for (let l = 0; l <= next; l++) {
        updateRound(l)
      }
    }
  }

  const max = Math.max(...Array.from(map.values()))
  return Array.from(map.keys()).filter((x) => map.get(x) === max)

  function updateRound (num: number) {
    const currentVal = map.get(num)
    const updatedValue = currentVal ? currentVal + 1 : 1
    map.set(num, updatedValue)
  }
}
