var http = require('http');
var fs = require ('fs');
var port = Number(process.argv[2]);
var path = process.argv[3];
var stream = fs.createReadStream(path, function(error, content) {console.log(error)});

http.createServer(function (request, response) {
    response.writeHead(200, {'content-type':'text/plain'});
    stream.pipe(response);
}).listen(port);