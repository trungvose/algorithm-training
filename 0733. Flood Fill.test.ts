import { floodFill } from './0733. Flood Fill';
describe('0733. Flood Fill', () => {
  it('should pass the first test case', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toStrictEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
});
