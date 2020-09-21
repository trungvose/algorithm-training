function isPalindrome(s: string): boolean {
  let lowercase = removeAlpha(s.toLowerCase());
  let reverseString = lowercase.split("").reverse().join("");
  return lowercase === reverseString;
}

function removeAlpha(s: string) {
  return s.replace(/[^0-9a-zA-Z]/g, "");
}
