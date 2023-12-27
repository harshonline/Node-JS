var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
    res.render('contact');
})

app.get('/contact', function(req, res){
    console.log(req.query);
    res.render('contact', {qs: req.query}); //Passing the query string
});

app.get('/profile/:name', function(req, res){
    var data = {age:20, job: 'Ninja'}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000);