export function addBinary(a: string, b: string): string {
  let output: number[] = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += Number(a.charAt(i--));
    }
    if (j >= 0) {
      sum += Number(b.charAt(j--));
    }
    output.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    output.unshift(1);
  }
  return output.join("");
}
