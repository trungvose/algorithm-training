export function slowestKey(
  releaseTimes: number[],
  keysPressed: string
): string {
  let out = '';
  let maxPressedTime = 0;
  for (let i = 0; i < releaseTimes.length; i++) {
    const current = releaseTimes[i];
    const currentChar = keysPressed[i];
    const prev = releaseTimes[i - 1];
    let diff = prev || prev === 0 ? current - prev : current;
    if(diff === maxPressedTime){
      if (!out || out < currentChar) {
        out = currentChar;
      }
    } else if (diff > maxPressedTime) {
      maxPressedTime = diff;
      out = currentChar      
    }
  }
  return out;
}
