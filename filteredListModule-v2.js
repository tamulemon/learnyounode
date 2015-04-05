var fs = require('fs');
var path = require('path');
module.exports = function filteredList(pathname, extention, callback) {
     fs.readdir(pathname, function(error, list) {
        if (error) {
            return callback(error);
        } 
       list = list.filter(function (file) {
            return path.extname(file) === '.' + extention
        })
        callback(null, list);
    })
}; 
   

