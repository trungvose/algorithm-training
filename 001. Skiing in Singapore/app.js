"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../Common/common");
common_1.ReadFile.Read(__dirname, "map.txt", function (data) { return SkiingInSingapore.Main(data); });
var SkiingInSingapore = /** @class */ (function () {
    function SkiingInSingapore() {
    }
    SkiingInSingapore.Main = function (data) {
        var firstLine = data[0], restData = data.slice(1);
        var nm = common_1.splitString(firstLine);
        this.n = nm[0];
        this.m = nm[1];
        for (var i = 0; i < restData.length; i++) {
            this.map[i] = common_1.splitString(restData[i]);
        }
        for (var x = 0; x < this.n; x++) {
            for (var y = 0; y < this.m; y++) {
                //if the maxLength is greater then current value, no need to traverse
                if (this.maxLength < this.map[x][y]) {
                    this.traverse(x, y, 1, this.map[x][y]);
                }
            }
        }
        console.log("Max length " + this.maxLength + ", max drop " + this.maxDrop);
    };
    SkiingInSingapore.traverse = function (x, y, length, start) {
        //consider as x y axis, instead of doing 4 if block. we can think about it as
        //current point [x,y]
        //go up [x, y + 1], go right [x + 1, y], go down [x, y - 1], go left [x - 1, y]
        var xAxis = [0, 1, 0, -1];
        var yAxis = [1, 0, -1, 0];
        for (var k = 0; k < 4; k++) {
            //check if the moving is still inside the graph
            var isInsideGraph = x + xAxis[k] >= 0 && x + xAxis[k] < this.n && y + yAxis[k] >= 0 && y + yAxis[k] < this.m;
            if (isInsideGraph && (this.map[x][y] > this.map[x + xAxis[k]][y + yAxis[k]])) {
                //if can traverse and the current value is bigger the the next traverse point.
                //set the length and keep the start point. to calculate the maxlength and drop later.
                this.traverse(x + xAxis[k], y + yAxis[k], length + 1, start);
            }
        }
        //current drop
        var drop = start - this.map[x][y];
        if (length > this.maxLength) {
            this.maxLength = length;
            this.maxDrop = drop;
        }
        //the use case where by length is the same but the drop is greater
        if (length === this.maxLength && this.maxDrop < drop) {
            this.maxDrop = drop;
        }
    };
    //array to hold the 2 dimensions array of number;
    SkiingInSingapore.map = [];
    //the expected result will be saved here
    SkiingInSingapore.maxLength = 0;
    SkiingInSingapore.maxDrop = 0;
    return SkiingInSingapore;
}());
//# sourceMappingURL=app.js.map