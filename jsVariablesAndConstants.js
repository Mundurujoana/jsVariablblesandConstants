let num =5;
console.log(num)

num =10;
console.log(num)

// Rules for Naming JavaScript Variables
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';

// JavaScript is case-sensitive.
let y = "hi";
let Y = 5;
console.log(y); // hi
console.log(Y); // 5

// Keywords cannot be used as variable names
// let new = 5; // Error! new is a keyword.

// JavaScript Constants
const x =80
console.log(x)

const s = 5;
s = 10;  // Error! constant cannot be changed.
console.log(s)

// you cannot declare a constant without initializing it
// const n;  // Error! Missing initializer in const declaration.
n = 5;
console.log(n)

// JavaScript console.log()
// program to print a sentence

// passing string
console.log("I love JS");
console.log("I am good")

// Print Values Stored in Variables
// program to print variables values
var fname = 'joana'
var lname = 'mundu'
console.log(fname + ' '+lname)