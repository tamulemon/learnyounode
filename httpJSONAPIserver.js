var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

//why doesn't work
//var server = http.createServer(function(req, resp) {
//    if (req.method === 'GET') {
//        var query = url.parse(req.url, true).query;
//        if (url.parse(req.url, true).pathname === '/api/parsetime') {
//            var isoDate = query.iso;
//        }
//        if (url.parse(req.url, true).pathname === '/api/unixtime') {
//            var unixTime = query.unixtime;
//        }
//        req.on('end', function() {
//            resp.writeHead(200, {'content-types': 'application/json'});
//            resp.write(JSON.stringify(isoDate.toISOString()));  
//            resp.write(unixTime); 
//            resp.end();
//        })
//        
//        req.on('error', function(error) {
//            console.log(error);
//        })
//    }
//    else resp.end();
//})

var server = http.createServer(function(req, resp) {
    if (req.method === 'GET') {
        resp.writeHead(200, {'content-types': 'application/json'});
        var parsed = url.parse(req.url, true);
        var isoDate = new Date(parsed.query.iso);
        if (parsed.pathname === '/api/parsetime') {
            var JsonTime = JSON.stringify({
                'hour': isoDate.getHours(),
                'minute': isoDate.getMinutes(),
                'second': isoDate.getSeconds(),
            });
            resp.write(JsonTime);  
        }
        if (parsed.pathname === '/api/unixtime') {
            var unixTime = JSON.stringify({unixtime: isoDate.getTime()});
            resp.write(unixTime); 
        }
        req.on('error', function(error) {
            console.log(error);
        })
        resp.end();
        
    }
    else resp.end();
})


server.on('error', function(error) {
    console.log(error);
})

server.listen(port);


//Solutions
//   var http = require('http')
//    var url = require('url')
//    
//    function parsetime (time) {
//      return {
//        hour: time.getHours(),
//        minute: time.getMinutes(),
//        second: time.getSeconds()
//      }
//    }
//    
//    function unixtime (time) {
//      return { unixtime : time.getTime() }
//    }
//    
//    var server = http.createServer(function (req, res) {
//      var parsedUrl = url.parse(req.url, true)
//      var time = new Date(parsedUrl.query.iso)
//      var result
//    
//      if (/^\/api\/parsetime/.test(req.url))
//        result = parsetime(time)
//      else if (/^\/api\/unixtime/.test(req.url))
//        result = unixtime(time)
//    
//      if (result) {
//        res.writeHead(200, { 'Content-Type': 'application/json' })
//        res.end(JSON.stringify(result))
//      } else {
//        res.writeHead(404)
//        res.end()
//      }
//    })
//    server.listen(Number(process.argv[2]))
//
