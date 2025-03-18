// Variables in Javascript

/* What are variables? 
Variables are containers for storing data values. 
In JavaScript, variables are declared using the :
1. 'var'
2 .'let' 
3. 'const'
4. using default 
keyword.

*/
// var a = 10;
// console.log(a)

// let b = 10;
// console.log(b);  

// const c = 100;
// console.log(c);

//node filename --> to run o/p in terminal

// var names = "Ishwari"; //Strong means all charaters with numbers which comes in double and single quotation
// console.log(names);

// var age = 20; // number is something which is only number without any quotation
// console.log(age);

// var isAlive = true; // boolean --> which has only 2 values, either true or false
// console.log(isAlive);

//Redeclare vs Reassignment

var a = 10;
a = 100;
console.log(a); // 100

// let num = 10;
// num = 100;
// console.log(num); 

//  const a = 10;
//  a = 100;
//  console.log(a); 
// const pie = 3.14;

// let length = 100;
// length = 200;

// var was the 1st way to use variables till 2015

// let and const came in 2015 in e56 update

// so from now you shouldnt be using var

//var is an outdated method to store data
// var is a global scope thats one of the reason
//not to use var

//use let instead of var

/* Data Types in Javascript

There are two types of data types in JavaScript
1. Primitive Data Types: can only store single type of data
2. Non-primitive Data Types: can store multiple type of datatypes.

Primitive Data Types:
1. String ==> Textual Data eg: "Hi Hello", "Bye", "Ishwari12345687";
2. Boolean ==> Any of the two values which are either true or false
3. Number ==> Whole Numbers, Decimal Numbers, and Negative Numbers(Integer) eg: 20, 3435, 100
4. null ==> denotes a null like empty value eg: let a = null;
5. undefined = a data type as there variables is not defined yet ex: let a;
*/
// let firstName = "Ishwari";
// let lastName = "Jamodkar";
// let fullName = `Ishwari Jamodkar`

// //Boolean Data Types

// let isAlive = true;
// let isValid = false;

// Number Data Types

// let age = 20;
// let number = 53.244;
// let pie = 3.14;

// //null

// let box = null;
// box = 20;
// console.log(box);

// //undefined

// let age2;
// console.log(age2);

/* Non-primitive Data type

1. Object
2. Array

//Objects in JS
//Object has a key value pair
//left one is key
//right one is value

 */
// Objects in JavaScript

// let person = {
//   name: "Ishwari",
//   age: 25,
//   phoneNo:  null,
//   hobbies: ["Reading", "Cooking", "Gaming"],
// };
// console.log(person);
// console.log(person.name);

// //Arrays : Collection of multiple data types
// let students = ["Student1", "Student2", "Student3", "Student"];
// //All arrays start from 0th idex
// //Arrays workss on index values
// console.log(students[0]);

//Array of objects
// let students = [
//     {name: "Ishwari", age: 25},
//     {name: "Alice", age: 22},
//     {name: "Sarah", age: 24}
// ]
// console.log(students);

//create a new object and use console.table(variable)

// let newStudent = {
//   name: "Joe",
//   age: 28,
//   phoneNo: 8888888889,
// //   hobbies: ["Reading", "Dancing", "Swimming"],
// };
// console.table(newStudent);