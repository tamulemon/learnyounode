var http = require('http');
var fs = require('fs');
var file = process.argv[2];
var url = require('url');
console.log(file);
/////////////////////////////////////////////////////////
//client
var options = {
    host : 'localhost',
    method : 'POST',
    port : 8080,
    path : '/?filename=userUpload.js'
};
var req = http.request(options, function(res) {
    res.setEncoding = 'utf8';
    res.on('data', function(data) {
        console.log(data);
    })
});

//fs.readFile(file, function(error, content) {
//    if (error) return console.log(error);
//    req.write(content);
//    req.end();
//})
fs.createReadStream(file).pipe(req);

        
req.on('error', function(error) {
        console.log(error);
    })

