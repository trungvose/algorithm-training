import { reorderSpaces } from "./1592. Rearrange Spaces Between Words";

describe("5519. Rearrange Spaces Between Words", () => {
  it("should pass the first test", () => {
    expect(reorderSpaces("  this   is  a sentence ")).toBe(
      "this   is   a   sentence"
    );
  });
  it("should pass the first test", () => {
    expect(reorderSpaces(" practice   makes   perfect")).toBe(
      "practice   makes   perfect "
    );
  });
});
