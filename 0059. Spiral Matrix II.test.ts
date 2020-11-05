import { spiralOrder } from './0054. Spiral Matrix'
import { generateMatrix } from './0059. Spiral Matrix II'

describe('0054. Spiral Matrix', () => {
  it('should pass the first test case', () => {
    expect(generateMatrix(3)).toStrictEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ])
  })
})
