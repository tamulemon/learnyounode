var http = require('http');
var fs = require('fs');
var file = process.argv;
var url = require('url');

//////////////////////////////////////////////////////////
//server
var server = http.createServer(request, function(req, res) {
    if (req.method === 'POST') {
        var destFile = fs.createWriteStream(url.parse(req.path, true).query.filename);
        req.pipe(destFile);
        res.on('error', function(error) {
            console.log(error);
        })
        res.on('end', function() {
            consle.log('Upload finished');                         
        })
    } else {
        res.end();
    }
});
server.listen(80);