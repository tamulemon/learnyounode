var fs = require('fs');
var path = require('path');
module.exports = function filteredList(pathname, extention, callback) {
     fs.readdir(pathname, function(error, list) {
        if (error) {
            return callback(error);
        } else {
            list.forEach(function(file) {
                if (path.extname(file) === '.' + extention) {
                    callback(file);
                } 
            })
        } 
    })
}; 
   

