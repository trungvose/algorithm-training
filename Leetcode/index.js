/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    const CROAK_SOUND = "croak";
    let mapSounds = {}
    let ifOneCroak = occurrenceOfSubStr(croakOfFrogs, CROAK_SOUND) > 1;
    if (ifOneCroak) {
        return 1;
    }

    for (var char of croakOfFrogs) {
        let count = mapSounds[char] || 0;
        mapSounds[char] = count + 1;
    }

    let allChars = Object.keys(mapSounds);
    let allCharsVal = allChars.map(char => mapSounds[char]);
    let hasDifferentChar = allChars.some(char => !CROAK_SOUND.includes(char));
    let hasDifferentSounds = new Set(allCharsVal).size > 1;
    if (hasDifferentChar || hasDifferentSounds) {
        return -1
    }
    return allCharsVal[0];
};

function occurrenceOfSubStr(s, subStr) {    
    let regularExp = new RegExp(subStr, 'g');
    let occurArray = s.match(regularExp);
    return (occurArray || []).length;    
}

minNumberOfFrogs("aoocrrackk")