function longestCommonPrefix (strs: string[]): string {
  if (strs.length === 0) {
    return ''
  }

  if (strs.length === 1) {
    return strs[0]
  }

  let output = ''
  const [first, ...rest] = strs
  for (let i = 0; i <= first.length - 1; i++) {
    const sub = first.substring(0, i + 1)
    const isAllHasSub = rest.every((s) => s.startsWith(sub))
    if (isAllHasSub && output.length < sub.length) {
      output = sub
    }
  }
  return output
}
