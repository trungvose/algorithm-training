import { findCircleNum } from './0547. Friend Circles'

describe('547. Friend Circles', () => {
  it('should pass the Test case 01', () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
      ])
    ).toBe(2)
  })

  it('should pass the Test case 02', () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1]
      ])
    ).toBe(1)
  })
})
