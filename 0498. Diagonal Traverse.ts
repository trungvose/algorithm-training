export function findDiagonalOrder (matrix: number[][]): number[] {
  const map = new Map<number, number[]>()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const index = i + j
      const num = matrix[i][j]
      const mapVal = map.get(index)
      if (mapVal) {
        map.set(index, [...mapVal, num])
      } else {
        map.set(index, [num])
      }
    }
  }

  return Array.from(map.values()).reduce((result, arr, index) => {
    const isEven = index % 2 === 0
    const retArr = isEven ? arr.reverse() : arr
    return [...result, ...retArr]
  }, [])
}
