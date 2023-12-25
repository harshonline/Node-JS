//pipes send information bit by bit as it helps in transferring information quickly

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Hello World');
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/12html.html', 'utf-8'); //You can type any file name here and send it to server
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Currently on 3000');