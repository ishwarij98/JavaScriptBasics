 // ARRAY METHODS

 //.push()
 //Adds elements to the end of the array
//  let students = ["anna", "carl", "sarah","stella"];
// students.push("maria");
// console.log(students);

//.pop()
//removes last element of the array
// students.pop("maria");
// console.log(students);

//.unshift()
//Adds at the beginning of the array
// students.unshift("fish");
// console.log(students);

//.shift()
//removes first element of the array
// students.shift();
// console.log(students);
//------- ---------- ---------- ------------ ------------

// let num = [1,2,3,4,5];
//.map()
/* creates a new array by applying 
 a function to each element */

//  let twice = num.map(num => num *2);
//  console.log(twice);

//.includes() 
//Checks if an element exists in an array
//when need to verify that the value is present
// gives boolean
// console.log(num.includes("3")); 

//.filter()
//creates a new array with
//elements that satisfy the condition.

// let evenNum = num.filter(num => num % 2 == 0);
// console.log(evenNum);

// let arr = [2,4,6,8,10, 11];
// let check = arr.filter((x)=> {
//     // return x % 2 == 0;
//     return x >= 6;
// })
// console.log(check);

//.find()
//Returns the first element that matches
//a condition
// let firstEven = num.find(num => num % 2 == 0);
// console.log(firstEven);

// let arr = [-2, 2,3,4,5,6,7];

// let check = arr.find((x)=> {
//     //  return x % 2 == 0;
//     return x> 0;
// })
// console.log(check);

//.findIndex() 
//Returns the index of the first matching element
// works for nested
// let index = num.findIndex(num => num % 2 == 0);
// console.log(index);

// let arr = [-2, -2,-3,[4,5],6,7];
// //or can use flat first then apply 
// let check = arr.findIndex((x)=> {
//     //  return x % 2 == 0;
//     return x> 0;
// })
// console.log(check);

//.every() 
//Checks if all elements meet a condition
// console.log(num.every(num => num % 2 ==0));

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

//.indexOf()
//returns the index of an element
//if no matching value then outputs : -1
// console.log(num.indexOf(2));

//.flat()
//flattens nested arrays intno a single-level array
//when need to work with deeply nested data

// let nested = [1, [2, [3, 4]]];
// console.log(nested.flat(2));

//---------------------------------------- ------------
//------- ----------------- ----------- -------------

//.at()
//it takes index as a parameter
// console.log(arr.at(2));
//similar to arr[2]

//.fill()
//replaces all the elements in an array with proivded value
// let a = ["hello", 1,2,3,"Bye"];
// let b = a.fill(10);
// console.log(b);

//.flat()
//  let a = [10, 20, [30, 40],[50, 60], [70, 80]];
//  console.log(a);
//  let b = a.flat();
//  console.log(b);

//Array.isArray()
// let a = {
//     fname: 'Joe',
//     age: 45,
// }
// let b = ["Joe", 45 ];

// console.log(Array.isArray(a));
// console.log(Array.isArray(b));

//.join()
// it will take the parameter("*")
// it will concat between all the elements
// it will convert into a string
// let a = [2,4,5,7,5,4,4,6,7,7,4];
// console.log(a.join("|"));

//.lastIndexof()
//gives last(from right to left) index of given element
// let a = ["hello", 1,2,3,"Bye","hello"];
// console.log(a.lastIndexOf("hello"));

//.every()
//checks if all elements satifsy the condition
//gives boolean

// let arr = [1, 2, 3, 4, 5, 6];

// let check = arr.every(find);

// function find(x) {
//     return x % 2 == 0;
// }
// console.log(check);

//1st method 
// let check = arr.every(
//     function find(x){
//         return x>=6;
//     }
// )
// console.log(check);

//2nd Method 
// let arr = [ 2,  4,  6];
// let check = arr.every((x) => {
// return x % 2 ==0;
// });
// console.log(check);

//----- --------- --------

//.toString()
// it will convert array elements to String
// let a = [1,2,3,4,"Hi"];
// let check = a.toString()
// console.log(check, typeof check);

//Experiment Example
// let check = a.map((x) => {
//     return a.toString(x);
// })
// console.log(check);

//---------------------------

//.sort()
//sort an Array in place
//works only for no.s till 10
// let num = [1,3,5,7,2,4,44,11,55,33,22,77, 45, 52];
// let sorted = num.sort() ;
// console.log(sorted);
// console.log(num.sort((a,b) => a - b)); //for no.s above 10 in ascending order
// console.log(num.sort((a, b) => b-a)); //descending order

//---------------------------

//.slice()
//Returns a portion of an array
//used when need specific range of an array
// let sliced = num.slice(1,4);
// console.log(sliced); 

//index(start positon), length(end position)

// let num = [10, 20,30 ,40 ,50 ,60];
// // index   0   1   2   3   4   5 
// // length  1   2   3  4   5   6
// //slice(index, length);
// console.log(Number.SLICE(2,5));

// console.log(1 + "1"); // 11
// console.log(1 - "1"); // 0

//.splice()
//Adds or removes elements(range replace) at a specific index
// used When need to modify array in place
// console.log(num);
// num.splice(1,3, 98);
// console.log(num);

// let basket = ["apple", "banana", "mango","grapes","Strawberry"];
// index   0           1         2       3        4    
// length  1           2         3       4        5   
//splice(index, length);
// console.log(basket.splice(2,5));
// let person = basket.slice(2,5);
// console.log(basket);
// console.log(person);

//ADDING ELEMENTS USING SPLICE
//  basket.splice(1, 0 , "pineapple");
//  //---> splice(add something at index, how many elements to remove, element to add/replace)
// console.log(basket);

// //REPLACING 
// basket.splice(1, 1 , "pineapple","avocado");
// console.log(basket);

// let names = ["Joe", "Anna", "Sia", "Rita"];
// //index        0       1       2       3
// console.log(names.splice(2));
// //REMOVE ALL
// console.log(names.splice(4));

//.some() 
//Checks if at least one element meets a condition
// console.log(num.some(num => num > 3));

// let num = [1,2,4,6,8];
// let check = num.every((x) => {
//     return x%2 == 0;
// })
// console.log(check);
// let sumCheck = num.some((num) => {
//    return  num > 3;
// })
// console.log(sumCheck);

// -----------------------------

//.reduce() 
//reduces and array to a single value
//when need to sum or aggregate data
//can be only performed on Numbers
// let sum = num.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// let sum = [1,2,3,4,5];
// let finalSum = sum.reduce((start, currentValue) => {
//     return start + currentValue
// }, 0); //0 gives current value;

// console.log(finalSum);

//start    current Value  == Total (start + current value)
/* 0          1               0 + 1 ===> 1
  1           2               1 + 2 ==> 3
  3           3               1 + 2 ==> 6
  6           4               1 + 2 ==> 10
  10          5               10+ 5 ==> 15
 */

//--------------------------------------

// .forEach() 
// Iterates over an array without returning a new one (returns undefined)
// Calls a function for eachc element in an array
// is not executed for empty elements
// num.forEach(num => console.log(num));
// console.log(num);

// let num = [5,4,3,2,1];
//  num.forEach((x) => {
//     console.log(x* 2)
//  })

//  let finalData = num.forEach((x) => x);
//  console.log(finalData);

// MAP
// let finalData = num.map((x) => x * 2 );
// console.log(finalData);

//  //ABILITY TO CHAIN OTHER METHODS
//  num.forEach((x) => {
//     console.log(x * x)
// })

//  let data = num.map((x) => x * x)
//  console.log(data);


//3 Things to rememeber about MAPS

//1. It returns the value so you can store it and pass to the next variable
//2. as it returns in array ..you can chain other method

