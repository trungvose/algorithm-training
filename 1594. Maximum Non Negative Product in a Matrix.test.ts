import { maxProductPath } from './1594. Maximum Non Negative Product in a Matrix'

describe('5521. Maximum Non Negative Product in a Matrix', () => {
  it('should pass the first test', () => {
    expect(
      maxProductPath([
        [-1, -2, -3],
        [-2, -3, -3],
        [-3, -3, -2]
      ])
    ).toBe(-1)
  })
})
