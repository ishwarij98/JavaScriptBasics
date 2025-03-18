//Operators in JS

/* 
In javascript an operator is a special type of symbol used to perform operation on Operationd
eg. values and variables
eg: 2 + 3 = 5

where 2 and 3 are operands
and + is an Operator 

JavaScript operators

1. Arithmetic Operators: +, -, *, /, % (modulus)
2. Assignment Operators: +, -
3. String Operators:
4. Bitwise Operator
5. Logical Operators: && (and), || (or),! (not)
6. Comparision Operators: -, -
7. other Operators

*/

//Assignment Operator

/* used to assign a value to a variable 
const a = 5;
a is a variable 
5 is a value

Operators           Name                  Examples
=             Assignment                   a = 5
+=            Add and Assignment           a += 5
-=            Subtract and Assignment      a -= 5
*=            Multiply and Assignment      a *= 5
/=            Divide and Assignment        a /= 5
%=            Modulus and Reminder         a %= 5
**=           Exponent and Assignment      a **= 5
*/

// let num = 10;
// num += 10; //20
// num -= 5; //15
// num *=4; //60
// num /= 6; //10
// num %= 2; //0
// console.log(num); 

// let num2 = 4;
// num2 **= 2; //16

// console.log(num2); 

//Arithmetic Operators
 // are used to perform arithmetic operations

 //Operator                  Name           Example
 // +             Addition                   x + y
 // -             Subtraction                x - y
 // *             Multiplication             x * y
 // /             Division                   x / y
 // %             Modulus (remainder)        x % y
 // **             Exponentiation (power)    x ** y
 // ++             Incremet by 1             x++ or ++x
 // --             Decrement by 1            x-- or --x
 
 
//  let a = 2;
//  let b = 3 ;

//  console.log(a + b); //5
//  console.log(a - b); //-1
//  console.log(a * b); //6
//  console.log(a / b); //0.6666666666666666
//  console.log(a % b); //2
//  console.log(a ** b); //8
//  console.log(++a); //3
//  console.log(--b); //2


//  let num1 = 22;
//  console.log(typeof num1)
//  let fname = "Ishwari"
//  console.log(typeof fname)
//  let isStudent = true
//  console.log(typeof isStudent)
//  let age = 20
//  console.log(typeof age)
//  let person = {name: "Ishwari", age: 25}
//  console.log(typeof person)
//  let students = ["Student1", "Student2", "Student3", "Student"]
//  console.log(typeof students) //Object (Array) --> All non-primitive data types come under objects 
//  let box = null
//  console.log(typeof box)
//  let age2
//  console.log(typeof age2)
//  let newStudent = {
//     name: "Joe",
//     age: 28,
//     phoneNo: 88
// }
//  console.log(typeof newStudent)



let a = 30; // Number
let b = "20"; // String
let c = "true" //String
let d = null // object
let e = undefined // undefined
let f = true // boolean

// let obj = {};
// console.log(typeof a); // object

// let arr = [a, b, c, d, e, f];
// console.log(typeof arr); // object

// let g = null;
// console.log(typeof g); // object

//why is null datatype considered an object?
//because it is not a string

//In Javascript we can also use the + operator 
//to concat (join) two or more Strings

// let a1 = "Joe";
// let b1 = "Biden";
// console.log(a1 + " " + b1);

//Bitwise Operator

//Range of Bitwise Operator 
// -(2^31) to (2^31 - 1)
//-2147483648 to 2147483647


//Bitwise operator is converted into a 32-bit binary digits(with zero's and one's)  
//Bitwise Operators are used to perform bitby bit operation on numbers
//Operator                  Name                Example
//&                          AND                x & y
//\                          OR                 x \ y
//^                          XOR                x ^ y
// ~                         NOT                ~ x

//Bitwise AND (&)
//Table for Bitwise AND
// x   y  Output
// 0   0    0
// 0   1    0
// 1   0    0
// 1   1    1

// let num1 = 10;
// let num2 = 5;
// console.log(num1 & num2); //2

//Bitwise OR (\)
//Table for Bitwise OR
// x   y  Output
// 0   0    0
// 0   1    1
// 1   0    1
// 1   1    1

// let num1 = 10;
// let num2 = 2;
// console.log(num1 | num2); 

//Bitwise XOR (^)
//Table for Bitwise XOR
// x   y  Output
// 0   0    0
// 0   1    1
// 1   0    1
// 1   1    0
//same --> 0
// diff --> 1


// let num1 = 10;
// let num2 = 2;
// console.log(num1 ^ num2); 

//Bitwise NOT (~)
//Table for Bitwise NOT
// x   y  Output
// 0   0    0
// 0   1    1

// let num1 = 12;
// console.log(~num1); 

//XOR ==> -(x+1)

//Logical Operators

//Logical Operators only deal with boolean values 
//which are either True or False

//Logical AND (&&)
//Table for Logical AND
// x        y      output
// false    false  false
//false    true     false
// true    false    false
// true     true    true

//Logica OR (\\)
//Table for Logical OR
//x       y       output
//false   false   false
//false   true    true
//true    false   true
//true    true    true

// let num1 = 4;
// let num2 = 5;
// console.log(num1 > num2 && num2 < num1);
// console.log(num1 <num2 && num2 > num1); 
// console.log(num1 >num2 || num2 < num1);
// console.log(num1 <num2 || num2 > num1);


//Logical NOT (!)
//Table for Logical NOT
//x       output
//false   true
//false   true    
//true    false   
//true    false    

// let num1 = false
// console.log(!num1);

//Comparison Operator 
//comparision operator are used to compared two values
//and gives a boolean value as a result
//Operator         Name         Example
//==              Equal to      x == y
//===            Strictly Equal value and Equal Type    x===y
//!              Not Equal to  x != y
//!==           Strictly not Equal value or Not Equal Type    x !==y
//>     Greater Than  x > y
//<  Less Than  x < y
//>=  Greater than or Equal to  x >= y
//<=  Less Than or Equal to   x <=y

let x = 5; //number
let y = "5"; //String
// == will only check value matching , it doesn't check Type
console.log(x == y); // true

console.log(x === y); // false
// === will check both value and Type


console.log(x!==y);
//!= will check value
console.log(x!==y);
//!== will check both value and Type

// console.log(x > y); // false
// console.log(x < y); // false
// console.log(x >= y); // true
// console.log(x <= y); // true






