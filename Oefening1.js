/**
 * Created by yannickvanoekelen on 12/10/16.
 */

// Load a dependency
var EventEmitter = require('events').EventEmitter;
// Define a class
var Counter = function(init) {
    // Safe value in object.
    this.value = init;
    // Define a method that will be presented in a class
    this.increment = function() {
        this.value++;
        this.emit('incremented', this.value);
    }
}
// prototype : What's done at initialization
Counter.prototype = new EventEmitter();

// Creating an object
var counter = new Counter(0);
var callback = function(count) {
    // display log in console
    console.log(count);
}
counter.addListener('incremented', callback);
counter.increment(); // 1
counter.increment(); // 2

