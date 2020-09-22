import { isPalindrome } from "./Common/isPalindrome";

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

//dp
function longestPalindromeDp(s: string): string {
  if (!s || s.length === 0) {
    return "";
  }
  let n = s.length;
  let dp: boolean[][] = [];
  let start = 0,
    end = 0,
    max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (s.charAt(i) === s.charAt(j) && (i - j <= 2 || dp[j + 1][i - 1])) {
        dp[j] = dp[j] || [];
        dp[j][i] = true;
      }
      let subLen = i - j + 1;
      if (dp[j][i] && subLen > max) {
        max = subLen;
        start = j;
        end = i;
      }
    }
  }
  return s.substring(start, end + 1);
}
