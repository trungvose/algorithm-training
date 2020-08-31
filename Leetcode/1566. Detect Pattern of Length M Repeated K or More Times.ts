function containsPattern(arr: number[], m: number, k: number): boolean {
  for (let i = 0; i <= arr.length - m * k; i++) {
    const piece = arr.slice(i, i + m).join("");
    const pieceRepeated = arr.slice(i, i + m * k).join("");
    const expected = piece.repeat(k);
    if (expected === pieceRepeated) {
      return true;
    }
  }
  return false;
}
