var fs = require('fs')

// fs.mkdirSync('app');    //To create folder   
// fs.rmdirSync('app');    //To delete folder

fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/written.txt', data)
    })
});