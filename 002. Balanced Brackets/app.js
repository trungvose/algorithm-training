'use strict';
var fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function (_) {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(function (str) { return str.replace(/\s*$/, ''); });
    main();
});
function readLine() {
    return inputString[currentLine++];
}
// Complete the isBalanced function below.
function isBalanced(s) {
    var brackets = "[](){}";
    var expectedClosedBrackets = [];
    for (var i = 0; i < s.length; i++) {
        var currentChar = s[i];
        var index = brackets.indexOf(currentChar);
        if (index === -1) {
            continue;
        }
        //if it is the open bracket, record the expected close bracket to the array
        if (index % 2 === 0) {
            expectedClosedBrackets.push(index + 1);
        }
        else {
            if (expectedClosedBrackets.pop() !== index) {
                return "NO";
            }
        }
    }
    //if the array is empty, meaning all the bracket are closed properly
    return expectedClosedBrackets.length === 0 ? "YES" : "NO";
}
function main() {
    var ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var t = parseInt(readLine(), 10);
    for (var tItr = 0; tItr < t; tItr++) {
        var s = readLine();
        var result = isBalanced(s);
        ws.write(result + "\n");
    }
    ws.end();
}
//# sourceMappingURL=app.js.map