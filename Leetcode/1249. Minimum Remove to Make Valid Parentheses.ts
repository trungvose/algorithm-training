//"lee(t(c)o)de)"
function minRemoveToMakeValid(s: string): string {
  let indexesToRemove = new Set<number>();
  let stack: number[] = [];
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        indexesToRemove.add(i);
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length) {
    let num = stack.pop();
    if (num || num === 0) {
      indexesToRemove.add(num);
    }
  }

  let sb: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!indexesToRemove.has(i)) {
      sb.push(char);
    }
  }
  return sb.join("");
}
