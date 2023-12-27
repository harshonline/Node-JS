//Format of express:
// GET -app.get('route', function) for all post, delete and get this thing is same
var express = require('express')

var app = express();

app.get('/contact', function(req, res){
    //send file is used to send html or some other files
    res.sendFile(__dirname+'/contact.html');
});

//to get a number as a param
app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile id: '+req.params.id);
});

//to get a name as a param
app.get('/profile/:name', function(req, res){
    res.send('You requested details of '+req.params.name);
});
app.get('/home', function(req, res){
    res.sendFile(__dirname + '/12html.html');
});

app.listen(3000);


