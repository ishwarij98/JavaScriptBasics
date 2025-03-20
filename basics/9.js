/* ------ TYPES OF FUNCTIONS -------------- 
1. Simple Function
2.Functions prarameter
3. Function Return
4. Function Expression
5. Arrow Function

----- SIMPLE FUNCTION

function Anna() {
console.log("Hello")
}

------ FUNCTION PARAMETER

A function parameter can also be declared with parameter
A parameter is a value that is passed when declaring a function


*/
//EXAMPLE 
// let age = 20;
// let name = "Michi";


// function callName(fullName, realAge) {
//     console.log(`My name is ${fullName} and my age is ${realAge}`);
// }
// callName(name,age );

// function sumNumbers(a, b ,c ,d) {
//     console.log(a+b);
// }

// sumNumbers(10, 20, 30 ,40)

// function SubNumbers(a, b ,c ,d) {
//     console.log(d-c-b-a);

// }
// function MulNumbers(a, b ,c ,d) {
//     console.log(a*b*c*d);
// }


// SubNumbers(10, 20, 30,40)
// MulNumbers(10, 20, 30 ,40)

//Create a function that accepts a number and creates its table

// function NumberTable(num) {
//     for(let i=0; i<=10;i++) {
//         console.log(`${num} * ${i} = ${num * i} `) 
//     }
   
// }

// NumberTable(2);

// function NumberTable(num, range) {
//     for(let i=1; i<=range; i++) {
//         console.log(`${num} * ${i} = ${num * i} `) 
//     }
   
// }

// NumberTable(2, 20);

/* ------------ FUNCTION RETURN --------

The return statement can be used to return the value from the function call
If nothing is returned, the function returns an undefined values

~ Anything written after return will not be executed!

*/
//EXAMPLE

// function add(a, b ,c, d) {
//     let sum = a + b + c + d
//     //console.log(sum)
//     return sum; // output without return keyword gives "undefined"
//     // return should be used at the last line
// }
// let output = add(10, 20, 30, 40);
// console.log(output);

/* ------- FUNCTION EXPRESSION --------

A function expression in javascript is a way to define a function 
as a part if an expression, usually by assigning it to a variable. 
Unlike function declarations, function expressions are not hoisted , 
meaning they are only available after they are defined. 

Also known as an ANONYMOUS function ( a function without a name).

 1. take function name with a let
 2. add an equal sign to it

*/

// let sayHello = function () {
//     console.log("Hello all");
// }
// sayHello()

// let numTable = function (num, range) {

// for (let i=1;i<=range;i++) {
//     console.log(`${num} * ${i} = ${num * i} `)
// }
// }
// numTable(2, 16)

/* ------- FUNCTION HOISTING -----------
In javaScript, hoisting is a behaviour in which 
a function or a variable can be used before declaration .

~ HOISTING cannot work in function Expression, Arrow function
~ HOISTING will work only in simple functions 

*/
//1. 
// console.log(a); // gives Error --> not initialised
// let a = 10;

//2. simple function calling
// sayHello() // gives output
// function sayHello() {
//     console.log("Hello World!")
// }

//3. storing function in a variable
// greeting() // gives Error --> not initialised
// let greeting = function () {
//     console.log("Hello, Hi");
// }

/* ------- ARROW FUNCTIONS -----------

Arrow Functions were introduced in 2015. (ES6)
Arrow Functions allows us to write a shorter function syntax

*/

// Before arrow functions, we were using function expression
// let sayBye = function () {
//     console.log(" Bye bye birdie!")
// }

// 1. remove function keyword
// 2. Add an arrow

// let sayBye = () => {
//     console.log("Bye bye birdie!")
// }
//  sayBye();

/* ----- Immediately Invoked Function Expression (IIFE) ----------

       

*/

// (function () {
//     console.log("Hi");
// }) 
// ();
