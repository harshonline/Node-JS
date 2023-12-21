function add(a, b){ 
    return a+b
}

function sub(a, b) {
    return a-b
}

exports.sub=sub         //Both work fine
module.exports.add=add