//normal function statement
function sayHi(){
    console.log("hi");
}
sayHi();

//function expression
var sayBye=function(){
    console.log("bye");
}
sayBye();

//Passing a function in function
function callFunction(func){
    func();
}
callFunction(sayHi);