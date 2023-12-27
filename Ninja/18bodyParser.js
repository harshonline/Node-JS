var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: true})
//First we need a get request
app.get('/contact', function(req, res){
    console.log(req.query);
    res.render('contact', {qs: req.query}); //Passing the query string
});
//Then we willl set a post request
app.post('/contact', urlencodedParser, function(req, res){
    // console.log(req.body);
    res.render('contact-success', {data: req.body});
})

app.get('/', function(req, res){
    res.render('contact');
})


app.get('/profile/:name', function(req, res){
    var data = {age:20, job: 'Ninja'}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000);
