//https://leetcode.com/problems/merge-intervals/
//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]

function merge(intervals: number[][]): number[][] {
  if (!intervals.length) {
    return [];
  }

  intervals.sort(([a], [b]) => a - b);
  let merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let [, previousEnd] = merged[merged.length - 1];
    let [currentStart, currentEnd] = intervals[i];
    //overlap
    if (currentStart <= previousEnd) {
      merged[merged.length - 1][1] = Math.max(previousEnd, currentEnd);
    } else {
      //no overlap
      merged.push(intervals[i]);
    }
  }

  return merged;
}
