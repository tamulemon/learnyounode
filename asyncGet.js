// the main idea here is to seperate loop itertion and http.get 
// because if put http.get inside of loop, when callback is fired asynchronized, likely the loop is completed, so all the data will be put into the last loop
var http = require('http');
var urlArray = process.argv.slice(2);
var allData = [];
var complete = 0;

// wrong soltuion. Everything is logged in the last response, plus, order of the string is not correct. bucause chunks from different data stream are coming in at the same time. 
for (var i=0; i<urlArray.length; i++){
    allData[i] = '';
    http.get(urlArray[i], function(response) {
        response.setEncoding = 'utf8';
        response.on('error', function(error) {
            return console.log(error);
        })
        response.on('data', function(chunk) {
            allData[i] += chunk;
        })
        response.on('end', function() {
            complete ++;
            if (complete === urlArray.length) {
                allData.forEach(function(data) {
                console.log(data);
                })
            }
        })
    })
} 



// Correct solution 1. seperate callback
for (var i=0; i<urlArray.length; i++){
    httpGet(i);
}

function httpGet(index) {
        allData[index] = '';
        http.get(urlArray[index], function(response) {
            response.setEncoding = 'utf8';
            response.on('error', function(error) {
                return console.log(error);
            })
            response.on('data', function(chunk) {
                allData[index] += chunk;
            })
            response.on('end', function() {
                complete ++;
                if (complete === urlArray.length) {
                    allData.forEach(function(data) {
                    console.log(data);
                    })
                }
            })
        })
    } 



// Correct solution II, but put callback inside loop
// need to invoke function for each loop optertion
for (var i=0; i<urlArray.length; i++){
   function httpGet(i) {
        allData[i] = '';
        http.get(urlArray[i], function(response) {
            response.setEncoding = 'utf8';
            response.on('error', function(error) {
                return console.log(error);
            })
            response.on('data', function(chunk) {
                allData[i] += chunk;
            })
            response.on('end', function() {
                complete ++;
                if (complete === urlArray.length) {
                    allData.forEach(function(data) {
                    console.log(data);
                    })
                }
            })
        })
    }
    httpGet(i);
}