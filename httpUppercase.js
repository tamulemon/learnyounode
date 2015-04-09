var http = require('http');
var port = process.argv[2];
var server = http.createServer(function(request, response) {
    if (request.method === 'POST') {
        var data = '';
        request.on('data', function(chunk){
            data += chunk.toString().toUpperCase();
        })
        request.on('end', function() {
            response.write(data)
            response.end();
        })
    } else {
        response.end();
    }
    
});
server.on('error', function(error) {
    console.log(error);
})
server.listen(port);