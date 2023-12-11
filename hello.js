var http=require('http')

http.createServer(function(req, res){
    res.writeHead(500, {'Content-Type':'text/html'})
    res.end("Welcome Back!")
    
}).listen(8080)