const readline = require('readline');

//read file
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'map.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        //start
        SkiingInSingapore.Main(data.split("\n"));
    } else {
        console.log(err);
    }
});

class SkiingInSingapore {
    //n m input
    private static n: number;
    private static m: number;

    //array to hold the 2 dimensions array of number;
    private static map: number[][] = [];

    //the expected result will be saved here
    private static maxLength: number = 0;
    private static maxDrop: number = 0;

    public static Main(data: string[]) {
        var i;
        let [firstLine, ...restData] = data;
        let nm = this.splitString(firstLine);
        this.n = nm[0];
        this.m = nm[1];
        for (i = 0; i < restData.length; i++) {
            this.map[i] = this.splitString(restData[i]);
        }

        for (var x = 0; x < this.n; x++) {
            for (var y = 0; y < this.m; y++) {
                //if the maxLength is greater then current value, no need to traverse
                if (this.maxLength < this.map[x][y]) {
                    this.traverse(x, y, 1, this.map[x][y]);
                }
            }
        }
        console.log(`Max length ${this.maxLength}, maxDrop ${this.maxDrop}`)
    }

    private static traverse(x: number, y: number, length: number, start: number) {
        //consider as x y axis, instead of doing 4 if block. we can think about it as
        //current point [x,y]
        //go up [x, y + 1], go right [x + 1, y], go down [x, y - 1], go left [x - 1, y]
        let xAxis = [0, 1, 0, -1];
        let yAxis = [1, 0, -1, 0];

        //check if the moving is still inside the graph
        var isInsideGraph = x + xAxis[k] >= 0 && x + xAxis[k] < this.n && y + yAxis[k] >= 0 && y + yAxis[k] < this.m;
        for (var k = 0; k < 4; k++) {
            if (isInsideGraph && (this.map[x][y] > this.map[x + xAxis[k]][y + yAxis[k]])) {

                //if can traverse and the current value is bigger the the next traverse point.
                //set the length and keep the start point. to calculate the maxlength and drop later.
                this.traverse(x + xAxis[k], y + yAxis[k], length + 1, start)
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
    }

    private static splitString(input: string): number[] {
        //split the string by space to get the array number, take only the item with value.
        return input.split(" ").map(item => parseInt(item)).filter(item => item !== null || item !== undefined);
    }
}



