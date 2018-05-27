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
    //checking the if argument is a function
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
};

console.log(calc(2,3, add));
console.log(calc(2,3, multiply));

// adding a new function here
var doWhatever = function(a,b) {
    console.log(`here are your two numbers back ${a} , ${b}`);
};

console.log(calc(2,3, doWhatever));

// we could also write function directly as an argument.
// we don't really need it to be declared outside.
// they are called anonimous function (no name for them)
// when we want to use something just once,
// we don't want to define it and pass it.
// you can just write it and use it as a function argument
console.log(calc(2,3, function(a,b) {
    return a - b;
}));

// practical example.
var myArr = [
{num: 9, str: 'apple'},
{num: 7, str: 'cabbage'},
{num: 1, str: 'ban'},
{num: 8, str: 'bread'}
];

myArr.sort(function(val1, val2) {
    if(val1.num > val2.num) {
        return - 1;
    } else {
        return 1;
    }
});

console.log(myArr);