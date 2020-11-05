export function reorderSpaces (text: string): string {
  const spacesCount = text.split('').filter((x) => !x.trim()).length
  const words = text.split(' ').filter((x) => x.trim())
  const betweenWords = words.length - 1
  const spaceToRepeat = betweenWords ? Math.floor(spacesCount / betweenWords) : 1
  const leftOverSpace = betweenWords ? spacesCount % betweenWords : spacesCount
  const leftOverStr = leftOverSpace ? ' '.repeat(leftOverSpace) : ''
  return `${words.join(' '.repeat(spaceToRepeat))}${leftOverStr}`
}
