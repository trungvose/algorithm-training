import { partitionLabels } from './0763. Partition Labels';

describe('0763. Partition Labels', () => {
  it('should pass the first test case', () => {
    expect(partitionLabels('caedbdedda')).toStrictEqual([1, 9]);
    expect(partitionLabels('ababcbacadefegdehijhklij')).toStrictEqual([
      9,
      7,
      8,
    ]);
  });
});
