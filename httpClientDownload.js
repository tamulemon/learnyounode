var http = require('http');
var fs = require('fs');
var desPath = '/Users/mengchen/Documents/CodeSchool\ NodeJS/abc.html';
var url = 'http://www.google.com';
    
// stream method
var destFile = fs.createWriteStream(desPath);

var userRequest = http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(destFile);
});

userRequest.on('error', function(error) {
    console.log(error);
})

////////////////////////////////////////////////////////////////////////////////////////
// on event method
var destPath2 = '/Users/mengchen/Documents/CodeSchool\ NodeJS/abc2.html';
var userRequest2 = http.get(url, function(response) {
    response.setEncoding('utf8');
    var body = '';
    response.on('data', function(chunk) {
        body += chunk.toString();
    })
    response.on('end', function() {
        fs.writeFile(destPath2, body, function(error) {
            if (error) console.log(error);
            console.log('file\'s saved');
        });
    });
});