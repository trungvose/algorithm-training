export function addStrings (num1: string, num2: string): string {
  const output: number[] = []
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  while (i >= 0 || j >= 0) {
    let sum = carry
    if (i >= 0) {
      sum += Number(num1.charAt(i--))
    }
    if (j >= 0) {
      sum += Number(num2.charAt(j--))
    }
    output.unshift(sum % 10)
    carry = Math.floor(sum / 10)
  }
  if (carry) {
    output.unshift(carry)
  }
  return output.join('')
}
