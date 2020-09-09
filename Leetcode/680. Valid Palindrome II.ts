function validPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s.charAt(start) === s.charAt(end)) {
      start++;
      end--;
    } else {
      if (isPalindrome(s, start + 1, end)) {
        return true;
      }
      if (isPalindrome(s, start, end - 1)) {
        return true;
      }
      return false;
    }
  }

  return true;
}

function isPalindrome(s: string, start: number, end: number): boolean {
  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
