// "lee(t(c)o)de)"
function minRemoveToMakeValid (s: string): string {
  const indexesToRemove = new Set<number>()
  const stack: number[] = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (char === '(') {
      stack.push(i)
    } else if (char === ')') {
      if (stack.length === 0) {
        indexesToRemove.add(i)
      } else {
        stack.pop()
      }
    }
  }

  while (stack.length) {
    const num = stack.pop()
    if (num || num === 0) {
      indexesToRemove.add(num)
    }
  }

  const sb: string[] = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (!indexesToRemove.has(i)) {
      sb.push(char)
    }
  }
  return sb.join('')
}
