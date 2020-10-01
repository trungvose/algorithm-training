import { threeSum } from "./0015. 3Sum";

describe('0015. 3 Sum', () => {
    it('should pass the first test case', () => {
        expect(threeSum([-1,0,1,2,-1,-4], 0)).toStrictEqual([[-1,-1,2],[-1,0,1]])
    });
});