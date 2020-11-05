function validateStackSequences (pushed: number[], popped: number[]): boolean {
  const n = pushed.length
  const stack = []
  let j = 0
  for (const num of pushed) {
    stack.push(num)
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }
  return j === n
}
