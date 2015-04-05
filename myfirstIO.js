var fs = require('fs');
var string = fs.readFileSync(process.argv[2]).toString();
var strArray = string.split('\n');
console.log(strArray.length-1);