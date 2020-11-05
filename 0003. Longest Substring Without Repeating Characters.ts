// "abcabcbb"

function lengthOfLongestSubstring (s: string): number {
  let output = 0
  const current: string[] = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (current.includes(char)) {
      current.splice(current.indexOf(char))
    }
    current.unshift(char)
    if (current.length > output) {
      output = current.length
    }
  }
  return output
}
