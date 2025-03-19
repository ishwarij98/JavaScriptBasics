/*

------- BREAK STATEMENT ----------

1. the break statement is used to exit the loop or switch statement immediately
2. when it is used, it stops the execution and exits the loop or block
*/

//SYNTAX
//  for (let i=0; i<=10; i++) {
//     if(i==5) {
//     console.log("Breaking at",i)
//     break;
//     }
//     console.log(i);
//  }

// The loop stops once it reaches 5, even though it was supposed ot run until 10 

/* 

---------  CONTINUE STATEMENT ------------

1. The continue statement is used to skip the current iterations and move to the next one.

*/

//SYNTAX
//  for(let i=1; i<=10 ; i++) {
//     if(i==4 || i==5) {
//         console.log("Hi,i'm skipping values :", i);
//         continue;
//     }
//     console.log(i);
//  }

// for (let i=0; i<=10; i++) {
//     if (i % 2 == 1) {
//         //odd i % 2 ==  0; even i % 2 == 1
// continue;
//     }
//     console.log(i);
// }

/* 
--------- SWITCH STATTEMENT ----------
 The switch stattment is used to execute on case from multiple possible cases.
It is often used as an alternative to multiple if ....else if conditions

simply ..
Switch statement is used to match a condition with
multiple matching conditions .. which is an alternate to multiple if elseif statements

Syntax is: 
switch(expression) {

case valuel:
// Code block
break;

case value2:
// Code block
break;

default:
// Default code block

Each case is checked against the expression.
If a case matches, the corresponding code block runs.
The break statement prevents fall-through (executing multiple cases).
The default case runs if no case matches (like an else statement).
*/

// let day = "Sunday";
// if (day == "Sunday") {
//     console.log("Yahoo its Sunday");
// }
// else if (day == "Monday") {
//     console.log("Go back to Work");
// }
// else if (day == "Tuesday") {
//     console.log("Go back to Work its Tuesday");
// } else if (day == "Wednesday") {
//     console.log("Go back to Work its Wednesday");
// } else if (day == "Thursday") {
//     console.log("Go back to Work its Thursday");
// } else if (day == "Friday") {
//     console.log("Go back to Work its friday");
// } else if (day == "Saturday") {
//     console.log("Its Weekend");
// }
// else {
//     console.log("Invalid");
// }

//-------Switch-case----------
// let student = "John";
// switch (student) {
//     case "John": 
//     console.log(" John is Present");
//     // break;

//     case "Sia": 
//     console.log(" Sia is Present");
//     break;

//     case "Norah": 
//     console.log(" Norah is Present");
//     break;

//     case "Alex": 
//     console.log(" Alex is Present");
//     break;
    
//     default: 
//     console.log("Student not enrolled!")
// }
//-----if-else statement --------
// let student1 = "John";
// if (student1 == "John") {
//     console.log("John is Present");
// }
// else if (student1 == "Sia"){
//     console.log(" Sia is Present");
// }
// else if (student1 == "Norah"){
//     console.log(" Norah is Present");
// }
// else if (student1 == "Alex"){
//     console.log(" Alex is Present");
// }
// else {
//     console.log("Student not enrolled!")
// }

