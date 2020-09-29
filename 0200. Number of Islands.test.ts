import { numIslands } from "./0200. Number of Islands";

describe("200. Number of Islands", () => {
  it("should pass the Test case 01", () => {
    expect(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ])
    ).toBe(1);
  });

  it("should pass the Test case 02", () => {
    expect(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ])
    ).toBe(3);
  });
});
