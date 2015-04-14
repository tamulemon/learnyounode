var http = require('http');
var fs = require('fs');
var file = process.argv;
var url = require('url');

//////////////////////////////////////////////////////////
//server
var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        var destFile = fs.createWriteStream(url.parse(req.url, true).query.filename);
        req.pipe(destFile);
        req.on('error', function(error) {
            console.log(error);
        })
        req.on('end', function() {
            console.log('Upload finished');
            res.end();
        })
    } else {
        res.end();
    }
});
server.on('error', function(error) {
    console.log(error);
})
server.listen(8080);