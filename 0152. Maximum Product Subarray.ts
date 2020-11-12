function maxProduct (nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  let output = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let product = 1
    for (let j = i; j < nums.length; j++) {
      product *= nums[j]
      output = Math.max(product, output)
    }
  }
  return output
}

// dp
function maxProductDP (nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  let minSoFar = nums[0]
  let maxSoFar = nums[0]
  let output = maxSoFar

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const tempMaxSoFar = Math.max(
      num,
      Math.max(num * maxSoFar, num * minSoFar)
    )
    minSoFar = Math.min(num, Math.min(num * maxSoFar, num * minSoFar))
    maxSoFar = tempMaxSoFar
    output = Math.max(maxSoFar, output)
  }
  return output
}
