export function reorderSpaces(text: string): string {
  let spacesCount = text.split("").filter((x) => !x.trim()).length;
  let words = text.split(" ").filter((x) => x.trim());
  let betweenWords = words.length - 1;
  let spaceToRepeat = betweenWords ? Math.floor(spacesCount / betweenWords): 1;
  let leftOverSpace = betweenWords ? spacesCount % betweenWords : spacesCount;
  let leftOverStr = leftOverSpace ? " ".repeat(leftOverSpace) : "";
  return `${words.join(" ".repeat(spaceToRepeat))}${leftOverStr}`;
}
