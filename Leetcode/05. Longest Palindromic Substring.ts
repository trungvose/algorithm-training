//brute force O(n^3)
function longestPalindrome(s: string): string {
  let output = "";
  let n = s.length;
  if (n === 1) {
    return s;
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subString = s.substring(i, j + 1);
      if (isPalindrome(subString) && subString.length > output.length) {
        output = subString;
      }
    }
  }
  return output;
}

function isPalindrome(s: string): boolean {
  let reverseString = s.split("").reverse().join("");
  return s === reverseString;
}
