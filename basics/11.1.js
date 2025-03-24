 // ARRAY METHODS

 //.push()
 //Adds elements to the end of the array
 let students = ["anna", "carl", "sarah","stella"];
// students.push("maria");
// console.log(students);

//.pop()
//removes last element of the array
// students.pop("maria");
// console.log(students);

//.unshift()
//Adds at the beginning of the array
students.unshift("fish");
console.log(students);

//.shift()
//removes first element of the array
students.shift();
console.log(students);

/////////////////////////////////////

let num = [1,2,3,4,5];
//.map()
/* creates a new array by applying 
 a function to each element */

//  let twice = num.map(num => num *2);
//  console.log(twice);


//.filter()
//creates a new array with
// elements that pass a condition.

let evenNum = num.filter(num => num % 2 == 0);
// console.log(evenNum);

//.reduce() 
//reduces and array to a single value
//when need to sum or aggregate data
let sum = num.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//.forEach() 
//Iterates over an array without returning a new one
// num.forEach(num => console.log(num));
// console.log(num);

//.find()
//Returns the first element that matches
//a condition
let firstEven = num.find(num => num % 2 == 0);
// console.log(firstEven);

//.findIndex() 
//Returns the index of the first matching element
let index = num.findIndex(num => num % 2 == 0);
// console.log(index);

//.includes() 
//Checks if an element exists in an array
//when need to verify that the value is present
// gives boolean
// console.log(num.includes("3")); 

//.some() 
//Checks if at least one element meets a condition
// console.log(num.some(num => num > 3));

//.every() 
//Checks if all elements meet a condition
// console.log(num.every(num => num % 2 ==0));

//.sort()
//sort an Array in place
// let num1 = [1,3,5,7,2,4];
// num1.sort() ;
// console.log(num1);

//.reverse()
//Reverses order of elements
// num.reverse();
// console.log(num);

//.concat();
//Merge multiple array
//used when to combine lists
// let a = ["jessica", "joe"];
// let b = ["Robert", "aria"];
// let combined = a.concat(b);
// console.log(combined);

//.slice()
//Returns a portion of an array
//used when need specific range of an array
// let sliced = num.slice(1,4);
// console.log(sliced); //excluded starting index range

//.splice()
//Adds or removes elements(range replace) at a specific index
//When need to modify array in place
// console.log(num);
// num.splice(1,3, 98);
// console.log(num);

//.indexOf()
//returns the index of an element
console.log(num.indexOf(2));

//.flat()
//flattens nested arrays intno a single-level array
//when need to work with deeply nested data

let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2));

