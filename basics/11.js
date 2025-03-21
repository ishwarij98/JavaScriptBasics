// --------- ARRAYS IN JAVASCRIPT ----------

/*
Arrays : Arrays in collection data elements and items stored in a 
continuous memory location which is in ordered items.

In JavaScript , Arrays uses numbered Indexes.

Data Type of Array is also an Object.

An Array is like of object that can store multiple 
data types thats one of the reason its in Non-primitve Data Type.

NOTE : Array indexes start from 0;

------ Example of an Array: 
Arrays get Stored in Square brackets
Objects get stored in Curly braces {}
*/

//fetching values using indexes
// let arr = [10, "10", true, "false", null, "undefined", "hello", 12];
//         0    1     2      3       4       5          6       7 

// CRUD --> create, read, update, delete

//READ array values : 
// console.log(arr[0]);
// console.log(arr[1]);
// arrayName[valueIndexNumber]

//ARRAYS Method to Perform Add //Update// Delete

//ADDING ELEMENTS to an Array

// let students = ["michi", "anne","sia","kesha"];

//1. unshift() : to add element at first position
// students.unshift("anne");
// console.log(students);

//2. push() : to add element at last position
// students.push("kiara");
// students.push(10);

// console.log(students);

//REMOVING / DELETING ELEMENTS from an Array
//remove last
// students.pop();

//remove first
// students.shift();
// console.log(students);

let arr = [10, " 10", true, "Helloo", "Hi"] 

console.log(arr);
arr[2] = false; //changes to false
console.log (arr);

