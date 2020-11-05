'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
  inputString += inputStdin
})

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))

  main()
})

function readLine () {
  return inputString[currentLine++]
}

// Complete the isBalanced function below.
function isBalanced (s) {
  const brackets = '[](){}'
  const expectedClosedBrackets = []
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i]
    const index = brackets.indexOf(currentChar)
    if (index === -1) {
      continue
    }

    // if it is the open bracket, record the expected close bracket to the array
    if (index % 2 === 0) {
      expectedClosedBrackets.push(index + 1)
    } else {
      if (expectedClosedBrackets.pop() !== index) {
        return 'NO'
      }
    }
  }
  // if the array is empty, meaning all the bracket are closed properly
  return expectedClosedBrackets.length === 0 ? 'YES' : 'NO'
}

function main () {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const t = parseInt(readLine(), 10)

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine()

    const result = isBalanced(s)

    ws.write(result + '\n')
  }

  ws.end()
}
