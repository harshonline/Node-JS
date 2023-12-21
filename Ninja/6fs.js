var fs = require('fs');

//Using Sync

// var read = fs.readFileSync('readme.txt', 'utf8');
// console.log(read);
// fs.writeFileSync('writeme.txt', read);

//Without using sync
//Sync causes the code to stop while the file is being read
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeme.txt', data, function(err, data){
        
    });
});


