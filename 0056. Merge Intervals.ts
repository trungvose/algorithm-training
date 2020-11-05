// https://leetcode.com/problems/merge-intervals/
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

export function merge (intervals: number[][]): number[][] {
  if (!intervals.length) {
    return []
  }

  intervals.sort(([a], [b]) => a - b)
  const merged: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const [, previousEnd] = merged[merged.length - 1]
    const [currentStart, currentEnd] = intervals[i]
    // overlap
    if (currentStart <= previousEnd) {
      merged[merged.length - 1][1] = Math.max(previousEnd, currentEnd)
    } else {
      // no overlap
      merged.push(intervals[i])
    }
  }

  return merged
}
