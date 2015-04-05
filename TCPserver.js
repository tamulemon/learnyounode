var net = require('net');

function fillInZero (x) {
    if (Number(x) < 10) {
        x = '0' + x;
    } return x;
}
    
var server = net.createServer(function(socket) {
    var date = new Date();    
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;     
    var D = date.getDate();      
    var h = date.getHours();
    var m = date.getMinutes();
    M = fillInZero(M);
    D = fillInZero(D);
    h = fillInZero(h);
    m = fillInZero(m);
    var formatDate = Y + '-' + M + '-' + D + ' ' + h + ':' + m + '\n';
    socket.write(formatDate);
    socket.end();
});
server.listen(process.argv[2]);