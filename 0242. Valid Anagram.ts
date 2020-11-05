function isAnagram (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  return sortString(s) === sortString(t)
}

function sortString (s: string) {
  return s.split('').sort().join('')
}
