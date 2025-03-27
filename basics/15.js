// ------------ OBJECT METHODS ---------------------
// 1. keys()

// let person = {
//     fname: "Danny",
//     age: 28,
//     isAlive : true,
// }

// //add
// person.city = "Paris";
// //update
// person.fname = "Diana";
// //delete
// delete person.isAlive;
// console.log(person);

//-----------------
// //Objects.keys
// //Takes all keys and converts into an Array
// let allKeys = Object.keys(person);
// //prints all keys
// console.log(allKeys);
//--------------------------
// //Objects.values
// //prints all values
// console.log(Object.values(person));
//--------------------------
//Object.fromEntries()
// This will convert an Array to Object
//  let arr = [["fname", "Nemo"],["type","Fish"],["movie","Finding Nemo"]];
//  console.log(Object.fromEntries(arr));

 let person = {
    fname: "Danny",
    age: 28,
    isAlive : true,
 }
//----------------------
 //Object.seal();
 // Does not allow to add or delete the values
 // Only allows to update 

//  Object.seal(person);

 //adding
//  person.city= "Hyd"; // doesnt change
 //deleting
//  delete person.isAlive; // doesnt change

 //updating
//  person.fname="Manny";
//  console.log(person);

// isSealed()
// console.log(Object.isSealed(person));  //Object.seal(person);

//------------------
//Object.freeze()
// Object.freeze(person);

//Does not perform any operation
// person.city = "XYZ";
// console.log(person);
// person.city = "ABC";
// console.log(person);
// delete person.isAlive;
// console.log(person);

//isFrozen()
//checks of freeze is true
// console.log(Object.isFrozen(person));

