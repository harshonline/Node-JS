
module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in array';
}

module.exports.adder = function(a, b){
    return `The sum of ${a} and ${b} is ${a+b}`;
}


//Export each function this way or do directly as done above
// module.exports.counter = counter;
// module.exports.adder = adder;

//Or do this way
module.exports={
    counter: counter,
    adder: adder,
}
