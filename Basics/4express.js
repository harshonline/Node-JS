//This way you can deal with different urls which are after port
const express=require('express')

const app=express()

app.listen(9000, function(req, res){
    console.log('Hello World')
})

app.get('/', function(req, res){
    res.send('Welcome back')
})

// app.get('/alien', function(req, res){
//     res.send('So you are an alien')
// })

app.get('/alien', function(req, res){//This way you can catch the id written in the link http://localhost:9000/alien?id=2234
    const id=req.query.id //Query is used here
    res.send('So you are alien number '+id)
})    

app.get('/alien/:id', function(req, res){//This way you can catch the id written in the link http://localhost:9000/alien/22
    const id=req.params.id //params is used here
    res.send('So you are alien number '+id)
})

