import { MapUtil } from './Common/map';

function findPairs(nums: number[], k: number): number {
  const map = MapUtil.generateMapFromArray(nums);
  let count = 0;
  map.forEach((val, key) => {    
    if (k > 0 && map.has(key + k)) {
      count++
    } else if(k === 0 && val > 1){
      count++
    }
  });
  return count;
}
