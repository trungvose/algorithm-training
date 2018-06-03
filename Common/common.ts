export class ReadFile {
    public static Read(callBack: Function) {
        //read file
        var fs = require('fs'),
            path = require('path'),
            filePath = path.join(__dirname, 'map.txt');

        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                let input: string[] = data.split("\n")
                //start
                callBack(input);
            } else {
                console.log(err);
            }
        });

    }
}