export function isPalindrome(s: string): boolean {
  let reverseString = s.split("").reverse().join("");
  return s === reverseString;
}

export function isSubstringPalindrome(s: string, start: number, end: number): boolean {
  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
