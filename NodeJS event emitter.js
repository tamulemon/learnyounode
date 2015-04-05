var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join', 'amb');
chat.emit('message','sds');

//create readable stream and read chunks off it
// or to use file.pipe(...) to replace the function
var fs = require('fs');
var stream = require('stream');
var file = fs.createReadStream('fruits.txt');
file.on('readable', function(){
  var chunk;
  while (null !== (chunk = file.read())) {
		console.log(chunk.toString());  
  }
});


// By default end() is called on the destination when the source stream emits end, so that destination is no longer writable.
// To write 'Finished', pass { end: false } as options to keep the destination stream open.
var fs = require('fs');
var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');
file.pipe(destFile, {end:false});
file.on('end', function(){
  destFile.end('Finished!');
    
}
    
// This is the right way to serve index.html on a http server
var http = require('http');
var fs = require('fs');
var server = http.createServer();
server(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var cont = fs.createReadStream('index.html');
    cont.pipe(res);
}).listen(8080);


    
// more about http server
var http = require('http');


var server = http.createServer();
server.on('request', function(request, response){
	 response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function(){
	console.log('Closing down the server...');
});

server.listen(8080);