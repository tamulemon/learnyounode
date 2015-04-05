var fs = require('fs');
var input = process.argv[2].toString();
fs.readFile(input, 'utf8', function (error, input) {
    if (!error) {
        var strArray = input.split('\n');
        console.log(strArray.length-1);
    } else {
        console.log(error);
    }
});

