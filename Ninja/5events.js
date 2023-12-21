var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();

myEmitter.on('some event', function(msg) {
    console.log(msg);
})

myEmitter.emit('some event', 'Event was emitted');

var Person = function(name) {
    this.name=name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james')
var mary = new Person('mary')
var ryu = new Person('ryu')

var people = [james, mary, ryu];

people.forEach(function(person){ // Here the function takes each element of the array as an argument
    person.on('speak', function(msg){
        console.log(person.name+' said '+msg);
    })
})

james.emit('speak', 'Affirmative')
mary.emit('speak', 'Roger')
ryu.emit('speak', 'Roger that')