/* eslint-disable */
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const common_1 = require('../Common/common')
common_1.ReadFile.Read(__dirname, 'map.txt', function (data) { return KFactorization.Main(data) })
var KFactorization = /** @class */ (function () {
  function KFactorization () {
  }
  KFactorization.Main = function (data) {
    const firstLine = data[0]; const rest = data[1]
    const nk = common_1.splitString(firstLine)
    this.n = nk[0]
    this.k = nk[1]
    this.a = common_1.splitString(rest).sort(function (a, b) { return a - b })
    const result = this.kFactorization(this.n, this.a)
    console.log(result.join(' ') + '\n')
  }
  KFactorization.kFactorization = function (n, A) {
    for (let i = A.length - 1; i >= 0; i--) {
    }
    return []
  }
  return KFactorization
}())
// # sourceMappingURL=app.js.map
