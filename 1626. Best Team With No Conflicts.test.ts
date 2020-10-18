import { bestTeamScore } from './1626. Best Team With No Conflicts';

describe('5545. Best Team With No Conflicts', () => {
  it('should pass the first test case', () => {
    expect(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])).toBe(16);
    expect(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])).toBe(34);
  });
});
