// // x is declare as a variable that later will be used a a function
// var x = function() {
//     console.log("i am called from inside a function")
// };

// // y is declare as a variable that later will be used a a function
// var y = function(callback) {
//     console.log('do something');
//     // something could be done here (before the callback function)
//     console.log("before callback");
//     callback();
//     // something could be done here (after the callback function)
//     console.log("after callback");
// };

// // passing x as a fuction body, as a function itself.
// // we are not passing the resuslts
// // then we can execute it at some point.
// ////y(x);

// // example of a simple process being done WITHOUT CALLBACK functions
// // var calc = function(num1, num2, calcType) {
// //     if (calcType === "add") {
// //         return num1 + num2;
// //     } else if (calcType === "multiply") {
// //         return num1 * num2;
// //     }
// // };

// // console.log(calc(2,3, 'add'));
// // console.log(calc(2,3, 'multiply'));


// // example of the same simple process being done WITH CALLBACK functions

// var add = function(a,b) {
//     return a + b;
// };

// var multiply = function(a,b) {
//     return a * b;
// };

// var calc = function(num1, num2, callback) {
//     //checking the if argument is a function
//     if (typeof callback === "function") {
//         return callback(num1, num2);
//     }
// };

// console.log(calc(2,3, add));
// console.log(calc(2,3, multiply));

// // adding a new function here
// var doWhatever = function(a,b) {
//     console.log(`here are your two numbers back ${a} , ${b}`);
// };

// console.log(calc(2,3, doWhatever));

// // we could also write function directly as an argument.
// // we don't really need it to be declared outside.
// // they are called anonimous function (no name for them)
// // when we want to use something just once,
// // we don't want to define it and pass it.
// // you can just write it and use it as a function argument
// console.log(calc(2,3, function(a,b) {
//     return a - b;
// }));

// // practical example.
// var myArr = [
// {num: 9, str: 'apple'},
// {num: 7, str: 'cabbage'},
// {num: 1, str: 'ban'},
// {num: 8, str: 'bread'}
// ];

// myArr.sort(function(val1, val2) {
//     if(val1.num > val2.num) {
//         return - 1;
//     } else {
//         return 1;
//     }
// });

// console.log(myArr);

// //advanced example
// var students = [
// {name: "Mary", score: 90, school:"East"},
// {name: "James", score: 100, school:"East"},
// {name: "Steve", score: 40, school:"East"},
// {name: "Gabe", score: 90, school:"West"},
// {name: "Rachel", score: 85, school:"East"},
// {name: "Rochelle", score: 95, school:"West"},
// {name: "Lynette", score: 75, school:"East"}
// ];

// var processStudents = function (data, callback) {
//     for(var i = 0; i < data.length; i++) {
//         if(data[i].school.toLowerCase() === "east") {
//             if (typeof callback === "function") {
//                 callback(data[i]);
//             }
//         }
//     }
// }

// processStudents(students, function(obj) {
//     if (obj.score > 60) {
//         console.log(obj.name + " passed.");
//     }
// });

// // gets total and count them all
// determineTotal = function() {
//     var total = 0, count = 0;

//     processStudents(students, function(obj) {
//         total += obj.score;
//         count++;
//     });
//     console.log("Total score: " + total + " - Total Count:" + count);
// };

// determineTotal();

/////////Prototypes///////////////////

//Three Methods for Setting the Prototype
// Using a constructor function
// Using Object.create(prototype)
// Using Object.setPrototypeOf(obj, prototype) --ES6

/*Function constructor*/

// object literal
// var objProto = {
//     //method
//     greet: function() {
//         console.log(this.greeting + " World!");
//     }
// };

// constructor function
// upper case in a variable means a constructor
// var Greeting = function(term) {
//     this.greeting = term;
// };

// // establishing prototype
// Greeting.prototype = objProto;

// // Greeting will allow us to create a new object
// // by using the keyword new
// var obj1 = new Greeting("Howdy");

// ////////////////////////////////////////////////////////
// /*using Object.create*/
// var obj2 = Object.create(objProto);
// // adds methods by dot notation
// obj2.greeting = "Hi";

// ////////////////////////////////////////////////
// //Using Object.setPrototypeOf(obj, prototype)
// var obj3 = {
//     greeting: "Hello"
// };

// Object.setPrototypeOf(obj3, objProto);

//////Callback example from https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async

function greeting(name) {
    //ES6 template string
    // console.log(`Hello ${name}, welcome to Scotch!`);
}

greeting('Yoimer');

// The above function is assigned a name greeting and has an argument of name. 
// We're also using an ES6 template string. 
// Let’s use this function as a callback function.

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;

    callback(fullName);

    // console.log('example');
}

introduction('Chris','Nwamba', greeting); // Hello Chris Nwamba, welcome to Scotch!

/* Notice the usage of the callback? The succeeding brackets, () after the function are not used when passing the function as a parameter.
Note: The callback function is not run unless called by its containing function, it is called back. 
Hence, the term call back function
Multiple functions can be created independently and used as callback functions. 
These create multi-level functions. When this function tree created becomes too large, the code becomes incomprehensible sometimes and is not easily refactored. This is known as callback hell. Let’s see an example: */

/////////////////////////map example


//separated function
// incrementByOne = function (element) {
//     return element + 1;
// }

// myArray = [1,2,3,4];
// myArray.map(incrementByOne); // returns [2,3,4,5]



//anonymous function
// myArray = [1,2,3,4];
// myArray.map(function(element) {
//   return element + 1;
// });

//anonymous function complex example
/* var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var launchOptimistic = rockets.map(function(elem) {
  return {
    country: elem.country,
    launches: elem.launches + 10,
  } 
});

console.log(launchOptimistic);
 */
/*
0:{country: "Russia", launches: 42}
1:{country: "US", launches: 33}
2:{country: "China", launches: 26}
3:{country: "Europe(ESA)", launches: 17}
4:{country: "India", launches: 14}
5:{country: "Japan", launches: 13}
*/

//anonymous function
// myArray = [1,2,3,4];
// console.log(myArray.map(function(element) {
//   return element + 1;
// }));

// //anonymous function with variable
// myArray = [1,2,3,4];
// let newArray = myArray.map(function(element) {
//   return element + 1;
// });
// console.log(newArray);