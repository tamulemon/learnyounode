
////solution 1
var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding = 'utf8';
    var allData = '';
    response.on('error', function(error) {
        console.log(error);
    })
    response.on('data', function(chunk) {
// likely not needed. because it is event based call, when data is completed read, will automatically switch to 'end'
// so 'data' chunk will never be null. 
        if (chunk !== null) {
            allData += chunk;
        }
    })
    response.on('end', function() {
        console.log(allData.length);
        console.log(allData);
    })
})

//solutuion 2
var http = require('http');
var bl = require('bl');
var url = process.argv[2];
http.get(url, function(response) {
    response.pipe(
        bl(function(error, data){
            if(error) 
                return console.error(error);
            data = data.toString();
            console.log(data.length);
            console.log(data);
        })
    )
})
