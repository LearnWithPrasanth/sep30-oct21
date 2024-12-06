// Variables - const, let, var
const fullName = "John Smith";
let b = 20;
var c = 30;
// console.log(c);

/*
Datatypes
1. Number
2. String
3. Boolean
4. Undefined
*/

// let a;
// console.log(typeof a);

// let language = "Javascript";
// console.log(`I love ${language}`);

// Arithematic Operators --> +, -, *, /, %, **

// Relational Operators --> <, >, <=, >=, ==, !=, ===, !==

// Logical Operators --> &&, ||, !

// let num = 0;
// if (num > 0) {
//     console.log("+Ve");
// } else if (num < 0) {
//     console.log("-Ve");
// } else {
//     console.log("Zero");
// }

// Loops
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let i = 1;
// while (i <= 10) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

// Arrays
// let arr = [1, 2, "three", true, 5.0];
// arr.push()
// arr.pop();
// b = [...arr];
// b[1] = 10;
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let element of arr) {
//     console.log(element);
// }

// Objects
// let employee = {
//     name: "John",
//     designation: "SDE I",
//     salary: "600000",
// };
// employee.name = "Smith";
// let keys = Object.keys(employee);
// console.log(keys);

// Functions
// function sample(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// sample(1, 2, 3, 4);

// let myFun = function (a, b) {
//     return a + b;
// };

// let myFun = (a, b) => {
//     return a + b;
// };
// let myFun = (a, b) => a + b;

// let result = myFun(2, 3);
// console.log(result);

let a = [1, 2, 3, 4, 5, 6];

let squares = a.map((element) => {
    return element ** 2;
});

let even = a.filter((element) => {
    if (element % 2 == 0) {
        return element;
    }
});
console.log(even);
