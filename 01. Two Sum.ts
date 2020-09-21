/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number): number[] {
    for(var i = 0; i < nums.length; i++){
        var diff = target - nums[i];
        var index = nums.indexOf(diff);
        if(index !== -1 && index !== i){
           return [i, index];
        }
    }
    return [];
};
