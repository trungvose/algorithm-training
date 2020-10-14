// brute force
function maxArea(height: number[]): number {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let currentArea = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  return maxArea;
}
