/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = function (croakOfFrogs) {
  const CROAK_SOUND = 'croak'
  const mapSounds = {}
  const ifOneCroak = occurrenceOfSubStr(croakOfFrogs, CROAK_SOUND) > 1
  if (ifOneCroak) {
    return 1
  }

  for (const char of croakOfFrogs) {
    const count = mapSounds[char] || 0
    mapSounds[char] = count + 1
  }

  const allChars = Object.keys(mapSounds)
  const allCharsVal = allChars.map(char => mapSounds[char])
  const hasDifferentChar = allChars.some(char => !CROAK_SOUND.includes(char))
  const hasDifferentSounds = new Set(allCharsVal).size > 1
  if (hasDifferentChar || hasDifferentSounds) {
    return -1
  }
  return allCharsVal[0]
}

function occurrenceOfSubStr (s, subStr) {
  const regularExp = new RegExp(subStr, 'g')
  const occurArray = s.match(regularExp)
  return (occurArray || []).length
}

minNumberOfFrogs('aoocrrackk')
