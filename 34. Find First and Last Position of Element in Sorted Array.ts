function searchRange(nums: number[], target: number): number[] {
  let targetRanges: [number, number] = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) {
      targetRanges[0] = i;
      break;
    }
  }

  if (targetRanges[0] === -1) {
    return targetRanges;
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    const num = nums[j];
    if (num === target) {
      targetRanges[1] = j;
      break;
    }
  }

  return targetRanges;
}
