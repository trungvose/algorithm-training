import getStrongest from "./1471. The k Strongest Values in an Array";
test("Should return the k strongest", () => {
  expect(getStrongest([1, 2, 3, 4, 5], 2)).toEqual([5, 1]);
  expect(getStrongest([6, 7, 11, 7, 6, 8], 5)).toEqual([11, 8, 6, 6, 7]);
  expect(getStrongest([-7, 22, 17, 3], 2)).toEqual([22, 17]);
});
