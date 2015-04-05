var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var extention = '.' + process.argv[3];


fs.readdir(pathname, function(error, list) {
    if(!error) {
        for (var i=0; i<list.length; i++) {
            if (path.extname(list[i]) === extention) {
                console.log(list[i]);
            }
        }
    } else {
        consle.log(error);
    }
});