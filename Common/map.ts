export class MapUtil {
  static generateMapFromArray (array: number[]): Map<number, number> {
    const map = new Map<number, number>()
    array.forEach((num) => {
      const val = map.get(num)
      if (val || val === 0) {
        map.set(num, val + 1)
      } else {
        map.set(num, 1)
      }
    })
    return map
  }
}
