function intersect(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  
  let map = generateMap(nums1);
  nums2.forEach((num) => {
    let currentVal = map.get(num);
    if (currentVal) {
      result.push(num);
      map.set(num, currentVal - 1);
    }
  });
  return result;
}

function generateMap(arr: number[]): Map<number, number> {
  let map = new Map<number, number>();
  arr.forEach((num) => {
    let currentVal = map.get(num);
    let newVal = currentVal ? currentVal + 1 : 1;
    map.set(num, newVal);
  });
  return map;
}
