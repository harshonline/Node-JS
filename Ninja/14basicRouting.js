var http = require('http');
var fs = require('fs');
const express = require('express')
const app = express()
var server = http.createServer(function(req, res){
    console.log('Listing to port 3000');
    var home = 'You are in home page';
    res.end(home);
})



server.listen(3000, '127.0.0.1');
console.log('Hello World');