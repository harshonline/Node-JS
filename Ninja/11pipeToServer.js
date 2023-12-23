//pipes send information bit by bit as it helps in transferring information quickly


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Hello World');
    var myReadStream= fs.createReadStream(__dirname + '/readme.txt', 'utf-8');

    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Currently on 3000');