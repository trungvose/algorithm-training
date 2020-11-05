function trap (height: number[]): number {
  let water = 0
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0
    let rightMax = 0
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j])
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k])
    }
    water += Math.min(leftMax, rightMax) - height[i]
  }
  return water
}
