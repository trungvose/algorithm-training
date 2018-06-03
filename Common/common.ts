export class ReadFile {
    public static Read(dir, file, callBack: Function) {
        //read file
        var fs = require('fs'),
            path = require('path'),
            filePath = path.join(dir, file);

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

export function splitString(input: string): number[] {
    //split the string by space to get the array number, take only the item with value.
    return input.split(" ").map(item => parseInt(item)).filter(item => item !== null || item !== undefined);
}