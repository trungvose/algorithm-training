import { merge } from "./0056. Merge Intervals";

function insert(intervals: number[][], newInterval: number[]): number[][] {
  return merge([...intervals, newInterval]);
}
