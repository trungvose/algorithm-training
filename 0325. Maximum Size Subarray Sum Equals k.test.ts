import { maxSubArrayLen } from './0325. Maximum Size Subarray Sum Equals k'

describe('0325. Maximum Size Subarray Sum Equals k', () => {
  it('should pass the first test case', () => {
    expect(maxSubArrayLen([-1], -1)).toBe(1)
    // expect(maxSubArrayLen([1, -1, 5, -2, 3], 3)).toBe(4);
  })
})
