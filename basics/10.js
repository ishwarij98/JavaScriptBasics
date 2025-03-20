/* ----------- OBJECTS in JAVASCRIPT------------ 

In JavaScript, Objects are Kings 
- if you understand objects then you understand javascript

In Javascript, everything is almost in Object

*/

//---- CRUD (Create,Read, Update, Delete) OPERATIONS

// let person = {
//     fname : "Mike",
//     age : 22,
//     isAlive: true
// }

//to add
// objectName.key = value
// person.lname = "Ross";
// person.phoneNumber = "+919999999999"
// console.log(person);

// update existing value
// objectName.key = value
// person.fname = "Harvey"
// console.log(person.age);

//delete --> use delete keyword + objectName.key
// delete person.age ;
// console.log(person);

// let person = {
//     fname : "Mike",
//     age : 22,
//     address: {
//         city : "New York",
//         country: "America"
//     }
// };

// // To access any value we use Dot method
// console.log(person.address.country);

// // other method to access is Backet notation
// // cannot be used for nested

// console.log(person["fname"]); // use quotes

/* ------ LOOPS In OBJECTS --------

1. for in loop
2. for of loop

*/
let person = {
    fname : "Mike",
    age : 22,
    address: {
        city : "New York",
        country: "America"
    }
};

// for in loop to print all keys
for(let a in person) {
    console.log(a); // use any variable
}

// for in loop to print all values
for (let value in person) {
    console.log(person[value]);
}
