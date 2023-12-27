//Format of express:
// GET -app.get('route', function) for all post, delete and get this thing is same
var express = require('express')

var app = express();
app.set('view engine', 'ejs');  //This enables you to search without the extension name and searches only for ejs files

app.get('/', function(req, res){
    res.render('home');         //This will search for home.ejs
});

app.get('/contact', function(req, res){   //This will search fro the contact.ejs
    res.render('contact');
});

//We will now use render method to work with our ejs files
app.get('/profile/:name', function(req, res){
    var data = {age: 20, job: 'Ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data}); //2nd argument is obeject and can be directly passed to the profile file as shown
});                                                                   //3rd argument can be the callback funcion

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/12html.html');
});

app.listen(3000);
