//if - else Statement in Javascript

/*
In computer progerammiung there may arise a situations 
where ypu have to run a block of code among more than once
or checking a situation.

In such conditions yopu can use the JS if-else statements .. 
which can take decsions based on the condition.

1 if statement
2. if-else statement
3. if .... else if ....else statement


1. IF STATTEMENT
//SYNTAX 

if(condition){
  //code to be executed if condition is true}
  //if the condition is false, then it will skip execution
  }



let num = 2;
if(num <5) {
console.log("Hello, world!");
}

if (2) {
    console.log("Condition is true"); //truthy value
}
if (undefined) {
    console.log("Condition is true"); //falsy value
}
if (null) {
    console.log("Condition is true");//falsy value
}
if ("") {
    console.log("Condition is true");//falsy value
}
if (0) {
    console.log("Condition is true");//falsy value
}
if (NaN) {
    console.log("Condition is true"); //falsy value
}
if (true) {
    console.log("Condition is true"); //truthy value
}
if (-0) {
    console.log("Condition is true"); //truthy value
}
if (" ") {
    console.log("Condition is true"); //truthy value
}
if ("Hello") {
    console.log("Condition is true"); //truthy value
}
*/

/*

2. IF-ELSE STATEMENT
// An if stattement can have an optional else clause

//SYNTAX 

if(condition){
  //code to be executed if condition is true}
} else {
  //code to be executed if condition is false}
}
*/

// let num = -9;

// if(num >= 0){
//   console.log("Number is positive");
//   } else {
//   console.log("Number is Negative");
// }


//How do we chexk if a number is odd/ even
//check if number divided by 2 gives 0 as a remainder
//if gives 0 then even, if gives >0 then odd


// let num = 9;
// if(num % 2 == 0 ){
//   console.log("Number is even");
//   } else {
//   console.log("Number is odd");
// }

 /*

3. IF.... ELSE IF.... ELSE STATEMENT
//It is used to execute a block of code 
when there are multiple condtions 
and to make a choice between all true conditions.

//SYNTAX 

if(condition1){
  //code to be executed if condition1 is true}
} else if(condition2){
  //code to be executed if condition2 is true}
} else if(condition3){
  //code to be executed if condition3 is true}
} else {
  //code to be executed if none of the above conditions is true}
}

*/
//Grade System
//marks >=90 ==> A
//marks >=80 ==> B
//marks >=70 ==> C
//marks >= 60 ==> D
//else Fail

// let myScore = 88;
// if (myScore >= 90) {
//     console.log("Your grade is A");
// }
// else if (myScore >= 80) {
//     console.log("Your grade is B");
// }
// else if (myScore >= 70) {
//     console.log("Your grade is C");
// }
// else if (myScore >= 60) {
//     console.log("Your grade is D");
// }
// else {
//     console.log("You failed");
// };

//Take a variable as Signal = "green"
//if green ==> go
//if yellow ==> slow
//if red ==> stop

//using === comparision operator for number or string is
//not required
//using == for nummber or string is enough

// let signal = "yellow";
//if (signal === "green"){
// console.log("Go");
// }
// else if (signal === "yellow") {
//     console.log("Slow");
// } 
// else if (signal === "stop") {
//     console.log("Stop");
// }
// else {
//     console.log("Invalid Signal");
// };

// if age is >= 18 ..you can vote
//if age is <= 18 ..you can't vote
//if age is negative ..say negative age
//if age is grater than 100 ..say you can't vote

let age = 150;
if (age >= 18 && age <100) {
    console.log("You can vote");
}
else if (age <= 18 ) {
    console.log("You can't vote");
}
else if (age < 0) {
    console.log("Negative age");
}
else {
    console.log("You can't vote");
}



