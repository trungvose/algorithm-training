import { findDiagonalOrder } from './0498. Diagonal Traverse'

describe('0498. Diagonal Traverse', () => {
  it('should pass the test case with one array', () => {
    expect(findDiagonalOrder([[2, 3]])).toStrictEqual([2, 3])
  })

  it('should pass the test case with the sample result', () => {
    expect(
      findDiagonalOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toStrictEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
  })
})
