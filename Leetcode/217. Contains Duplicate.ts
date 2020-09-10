function containsDuplicate(nums: number[]): boolean {
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
