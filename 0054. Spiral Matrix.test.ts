import { spiralOrder } from './0054. Spiral Matrix';

describe('0054. Spiral Matrix', () => {
  it('should pass the first test case', () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('should pass the array with only one row', () => {
    expect(spiralOrder([[2, 3]])).toStrictEqual([2, 3]);
  });

  it('should pass the array with only one colum', () => {
    expect(spiralOrder([[2], [3]])).toStrictEqual([2, 3]);
  });
});
