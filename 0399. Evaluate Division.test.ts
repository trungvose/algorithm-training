import { calcEquation } from './0399. Evaluate Division'

describe('399. Evaluate Division', () => {
  it('should pass the first test case', () => {
    expect(
      calcEquation(
        [
          ['a', 'b'],
          ['b', 'c']
        ],
        [2.0, 3.0],
        [
          ['a', 'c'],
          ['b', 'a'],
          ['a', 'e'],
          ['a', 'a'],
          ['x', 'x']
        ]
      )
    ).toMatchObject([6.0, 0.5, -1.0, 1.0, -1.0])
  })
})
