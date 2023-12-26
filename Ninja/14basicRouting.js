//This is routing based on using else if loops but not the express library

var http = require('http');
var fs = require('fs');
const express = require('express');
const { stringify } = require('querystring');
const app = express();
var server = http.createServer(function(req, res){
    console.log('Request made');
    if (req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/12html.html').pipe(res);
    }
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if (req.url === '/api/ninjas'){
        var ninjas = [{name: 'saturo gojo', age: 29}, {name: 'yoshi ohara', age: 32}];
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/z404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listning to port 3000');
