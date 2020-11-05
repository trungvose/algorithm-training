import { isSubstringPalindrome } from './Common/isPalindrome'

function validPalindrome (s: string): boolean {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    if (s.charAt(start) === s.charAt(end)) {
      start++
      end--
    } else {
      if (isSubstringPalindrome(s, start + 1, end)) {
        return true
      }
      if (isSubstringPalindrome(s, start, end - 1)) {
        return true
      }
      return false
    }
  }

  return true
}
