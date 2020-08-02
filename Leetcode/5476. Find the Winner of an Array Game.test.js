import getWinner from "./5476. Find the Winner of an Array Game";

describe("5476. Find the Winner of an Array Game", () => {
  it("should pass the first test", () => {
    expect(getWinner([1, 25, 35, 42, 68, 70], 1)).toEqual(25);
    expect(getWinner([2, 1, 3, 5, 4, 6, 7], 2)).toEqual(5);
  });
});
