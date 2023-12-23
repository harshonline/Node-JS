//This stream method is used to increase speed it devides the data into small peaces and then sends it forward
var http = require('http');

var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/readme.txt', 'utf8'); //__dirname takes us into the current directory
//using utf8 to encode it in redable format

var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');//we can write a file this way

myReadStream.on('data', function(chunk){ //same like on event 
    console.log('new chunk recieved');
    console.log(chunk);
    myWriteStream.write(chunk); //This line keeps writting the chunk into the file
    console.log('Written');
});