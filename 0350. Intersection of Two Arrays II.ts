function intersect (nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  const map = generateMap(nums1)
  nums2.forEach((num) => {
    const currentVal = map.get(num)
    if (currentVal) {
      result.push(num)
      map.set(num, currentVal - 1)
    }
  })
  return result
}

function generateMap (arr: number[]): Map<number, number> {
  const map = new Map<number, number>()
  arr.forEach((num) => {
    const currentVal = map.get(num)
    const newVal = currentVal ? currentVal + 1 : 1
    map.set(num, newVal)
  })
  return map
}
