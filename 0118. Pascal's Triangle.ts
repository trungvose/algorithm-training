type Matrix = number[][];
export function generate (numRows: number): number[][] {
  const triangle: Matrix = []
  if (numRows === 0) {
    return triangle
  }
  triangle.push([1])
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    const row = [1]
    const prevRow = triangle[rowNum - 1]
    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j])
    }
    row.push(1)
    triangle.push(row)
  }
  return triangle
}
