const { isUtf8 } = require('buffer')
var fs=require('fs')

fs.readFile('calc.js', 'utf8', function(err, data){//takes error and data as parameters
    console.log(data)
}) //file name, encoding, callBackFunction

fs.writeFile('experiment.js', 'console.log("done")', function(err){
    console.log("data saved")
})

