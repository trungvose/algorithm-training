'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line
exports.splitString = exports.ReadFile = void 0
const ReadFile = /** @class */ (function () {
  function ReadFile () {
  }
  ReadFile.Read = function (dir, file, callBack) {
    // read file
    const fs = require('fs'); const path = require('path'); const filePath = path.join(dir, file)
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
      if (!err) {
        const input = data.split('\n')
        // start
        callBack(input)
      } else {
        console.log(err)
      }
    })
  }
  return ReadFile
}())
exports.ReadFile = ReadFile
function splitString (input) {
  // split the string by space to get the array number, take only the item with value.
  return input.split(' ').map(function (item) { return parseInt(item) }).filter(function (item) { return item !== null || item !== undefined })
}
exports.splitString = splitString
// # sourceMappingURL=common.js.map
