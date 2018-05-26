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
////y(x);

// example of a simple process being done WITHOUT CALLBACK functions
// var calc = function(num1, num2, calcType) {
//     if (calcType === "add") {
//         return num1 + num2;
//     } else if (calcType === "multiply") {
//         return num1 * num2;
//     }
// };

// console.log(calc(2,3, 'add'));
// console.log(calc(2,3, 'multiply'));


// example of the same simple process being done WITH CALLBACK functions

var add = function(a,b) {
    return a + b;
};

var multiply = function(a,b) {
    return a * b;
};

var calc = function(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,3, add));
console.log(calc(2,3, multiply));