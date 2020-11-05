// ababcbacadefegdehijhklij

const generateLastOccurrenceChar = (S: string): Map<string, number> => {
  const map = new Map<string, number>()
  for (let i = 0; i < S.length; i++) {
    const char = S.charAt(i)
    map.set(char, i)
  }
  return map
}

export function partitionLabels (S: string): number[] {
  const lastOccurrenceMap = generateLastOccurrenceChar(S)
  let anchor = 0
  let j = 0
  const ans = []
  for (let i = 0; i < S.length; i++) {
    const char = S.charAt(i)
    const lastAppearance = lastOccurrenceMap.get(char)
    if (lastAppearance !== undefined) {
      j = Math.max(j, lastAppearance)
      if (i === j) {
        ans.push(j - anchor + 1)
        anchor = i + 1
      }
    }
  }
  return ans
}
