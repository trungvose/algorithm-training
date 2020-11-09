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
