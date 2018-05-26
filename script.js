// x is declare as a variable that later will be used a a function
var x = function() {
    console.log("i am called from inside a function")
};

// y is declare as a variable that later will be used a a function
var y = function(callback) {
    console.log('do something');
    // something could be done here (before the callback function)
    console.log("before callback");
    callback();
    // something could be done here (after the callback function)
    console.log("after callback");
};

// passing x as a fuction body, as a function itself.
// we are not passing the resuslts
// then we can execute it at some point.
y(x);