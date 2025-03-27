
// 1. Program to print Hello World

// console.log("Hello World!");

// ------------------------********---------------


//  2.Program to Add Two Numbers
// let num1 = 2;
// let num2 = 4;
// let sum = num1 + num2;
// console.log(`The Sum is : ${sum}`)


// ------------------------********---------------

//3. Add Square Root of a Number

// let num = 10;

// let result = Math.sqrt(num);
// console.log(result);

// ------------------------********---------------

//4. Calculate the Area of a Triangle

// let b = 10;
// let h = 20;

// let area = (b + h) /2;
// console.log(`Triangle Area = ${area}`);

// ------------------------********---------------

//5. Program to Swap two variables

// let num1 = 10;
// let num2 = 20;

// let swappedNums;

// temp = num1;
// num1 = num2;
// num2 = temp;

// console.log(`a after swap: ${num1}`);
// console.log(`b after swap: ${num2}`);

// ------------------------********---------------

//6. Convert kilometers to miles

// const conv = 0.621371;
// let km = 10;

// let mile = km * conv;

// console.log(`${km} kilometer is equal to ${mile}`)


// ------------------------********---------------

//7. Convert Celsius to Farenheit

// const celsius = 32;
// const farenheit = (1.8 * celsius) + 32;

// console.log(`${celsius} degree celsius is equal to ${farenheit} degree farenheit.`);

// ------------------------********---------------


//8. program to work with constants

// const a = 10;
// console.log(a);

// {
//     const a = 20;
//     console.log(a);
    
// }
// console.log(a);

// const arr = ['Hi', 'Hello'];
// console.log(arr);

// arr[2] = 'world';
// console.log(arr);

// ------------------------********---------------

//9. JavaScript Program to Generate a random Number

// let a = Math.random();
// console.log(a);

// ------------------------********---------------

//10. Program to Check if a number is Positive, Negative, or Zero

// const num = 5;

// if (num > 0 ) {
//     console.log("Positive Number!")
// }
// else if (num == 0) {
//     console.log("Zero");
// }
// else {
//     console.log("Negative Number!");
// }

// ------------------------********---------------

//11. Program to Check if a Number is Odd or Even

//  const num = 6;
//  const result = num % 2; 

// if(num % 2 == 0) {
//     console.log("Even Number!")
// }
// else {
//     console.log("Odd!");
// }

// ------------------------********---------------

//12. Program to Find the Largest Among Three Numbers

// const num1 = 10;
// const num2 = 20;
// const num3 = 40;
// let largest;

// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// console.log("The largest number is " + largest);

// ------------------------********---------------

//13. Program to Check Prime Number

// const number = 10;
// let isPrime = true;

// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {

//     for (let i = 2; i <= number/2; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// else {
//     console.log("Not a prime number.");
// }

// ------------------------********---------------

//14. Program to Print All Prime Numbers in an Interval

// let start = 10;
// let end = 50;

// console.log(`The prime numbers between ${start} and ${end} are:`);


// for (let i = start; i <= end; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// ------------------------********---------------

//15.Program to find a factorial of a number

// const num = 10;

// if (num < 0) {
//     console.log('Invalid!');
// }

// else if (num === 0) {
//     console.log(`The factorial of ${num} is 1.`);
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${num} is ${fact}.`);
// }

// ------------------------********---------------

//16. Program to Display the Multiplication Table

// const num = 10;

// for(let i = 1; i <= 10; i++) {

//     const result = num * i;

//     console.log(`${num} * ${i} = ${result}`);
// }

// ------------------------********---------------

//17. Program to Print the Fibonacci Sequence

// const number = 8;
// let n1 = 0, n2 = 1, temp;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     temp = n1 + n2;
//     n1 = n2;
//     n2 = temp;
// }

// ------------------------********---------------

//18. Program to Check Armstrong Number

// let number = 371;
// let sum = 0;

// let temp = number;
// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     temp = Math.floor(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// ------------------------********---------------

//19. Program to find Armstrong Numbers Between Two Intervals

// const low = 23;
// const high = 789;
// console.log ('Armstrong Numbers:');

// for (let i = low; i <= high; i++) {

//     let numberOfDigits = i.toString().length;

//     let sum = 0;

//     let temp = i;

//     while (temp > 0) {

//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         temp = parseInt(temp / 10); 
//     }
 
//     if (sum == i) {
//         console.log(i);
//     }
// }

// ------------------------********---------------

// 20. Program to make a simple calculator

// let operator = "-";

// let a = 20;
// let b = 10;

// let result;
// if (operator == '+') {
//     result = a + b;
// }
// else if (operator == '-') {
//     result = a - b;
// }
// else if (operator == '/') {
//     result = a / b;
// }
// else {
//     result = a * b;
// }
// console.log(`${a} ${operator} ${b} = ${result}`);

// -------------------------------------------